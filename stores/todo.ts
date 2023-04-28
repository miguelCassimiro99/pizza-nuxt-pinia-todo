import { IProject, IProjects, IToDoItem, IToDoList } from "~~/types/to-do"
import { v4 as uuidv4 } from 'uuid';

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
    addToDoItem(description: string) {
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

      this.todo.todos.push(newTodo);
    },
    toggleToDoItemFinished(id: string) {
      this.todo.todos.forEach((item, index) => {
        if(item.id === id) item.finished = !item.finished
      })

    }
  }
})