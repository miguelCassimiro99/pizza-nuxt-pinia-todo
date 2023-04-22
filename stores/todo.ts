import { IProject, IProjects, IToDoItem, IToDoList } from "~~/types/to-do"

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
  } as IState)
})