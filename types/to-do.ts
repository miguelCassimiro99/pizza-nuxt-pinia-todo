export interface IProject {
  id: string
  name: string
}

export interface IToDoItem {
  id: string
  description: string
  project?: IProject
  finished: boolean
}

export interface IToDoList {
  todos: IToDoItem[]
}

export interface IProjects {
  projects: IProjects[]
}