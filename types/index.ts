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
  projects: IProject[]
}


export interface IMenuItem {
  label: string
  url: string
  icon: string
}

export interface IMenuItems {
  menuItems: IMenuItem[]
}