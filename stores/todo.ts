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
  actions: {
    addToDoItem(description: string) {
      console.log("OPa")

      let newTodo = {
        description,
        id: uuidv4(),
        finished: false,
      } as IToDoItem

      this.todo.todos.push(newTodo);
    },
    toggleToDoItemFinished(id: string) {
      this.todo.todos.forEach((todo) => {
        if(todo.id === id) todo.finished = !todo.finished
      })
    }
  }
})