import { IProject, IProjects, IToDoItem, IToDoList } from "~~/types/to-do"
import { v4 as uuidv4 } from 'uuid';
import clientHttp from "~~/services/http";

interface IState {
  todo: IToDoList
  project: IProjects 
}

export const useToDoStore = defineStore('todo', {
  state: () => ({
    todo: {
      todos: [],
    },
    project: {
      projects: []
    }
  } as IState),
  getters: {
    total: (state) => state.todo.todos.length
  },
  actions: {
    async addToDoItem(description: string) {

      try {
        if(!description) return
        if(!description.length) return
        if(description === " ") return
        
        // You can't add more items if it has more than 4 items unfinished
        if(this.todo.todos.filter((item) => !item.finished).length > 4) return
        description = description.trim();
        
        let newTodo = {
          description,
          id: uuidv4(),
          finished: false,
        } as IToDoItem
        
        const response = await clientHttp.post(`/todos`, newTodo)
        if(!response.data) throw new Error;
        this.todo.todos.push(newTodo);
        
      } catch (error) {
        console.log("Error")
        console.log("Can't add new ToDo Item");
      }
    },

    async toggleToDoItemFinished(id: string) {
      try {
        let todoUpdated;
        this.todo.todos.forEach((item, index) => {
          if(item.id !== id) return;
          item.finished = !item.finished
          todoUpdated = item;
        })

        const response = await clientHttp.put(`/todos/${id}`, todoUpdated)
        if(!response.data) throw new Error
        
      } catch (error) {
        console.log(error)
        console.log("Can't update ToDo Item")
      }
      
    },

    async getTodoList() {
      try {
        console.log("GET - TODO LIST - Init...")
        const response = await clientHttp.get<IToDoItem[]>('/todos');
        if(!response.data) throw new Error

        this.todo.todos = response.data;
      } catch (error) {
        console.log("Error to fetch ToDo List")
      }
    },

    async deleteTodoItem(id: string) {
      try {
        const response = await clientHttp.delete(`/todos/${id}`)
        if(!response.data || response.status !== 200) throw new Error

        this.todo.todos = this.todo.todos.filter((item) => item.id !== id);

      } catch (error) {
        console.log("Error");
        console.log("Can't delete ToDo Item")
      }
    },

    async editTodoItem(item: IToDoItem) {
      try {
        if(!item.description || item.description === " ") return;
        if(item.description === "") return;
        item.description = item.description.trim();

        const response = await clientHttp.put(`/todos/${item.id}`, item)
        if(!response.data) throw new Error

        this.todo.todos.forEach((todo) => {
          if(todo.id === item.id) todo = item
        })

      } catch (error) {
        console.log("Error")
        console.log("Can't edit Todo Item")
      }
    }
  }
})