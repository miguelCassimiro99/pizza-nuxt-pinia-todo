import clientHttp from "~~/services/http"
import { IProject, IProjects } from "~~/types"
import { v4 as uuidv4 } from 'uuid';

interface IState {
  project: IProjects
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    project: {
      projects: [],
    }
  } as IState),
  actions: {
    async addProject(name: string) {
      try {
        if(!name) return
        if(!name.length) return
        if(name === " ") return
        name = name.trim();
        
        let newProject = {
          name,
          id: uuidv4(),
        } as IProject
        
        const response = await clientHttp.post(`/todos`, newProject)
        if(!response.data) throw new Error;
        this.project.projects.push(newProject);
        
      } catch (error) {
        console.log("Error")
        console.log("Can't add new Project Item");
      }
    },

    async getProjectList() {
      try {
        console.log("GET - Projects LIST - Init...")
        const response = await clientHttp.get<IProject[]>('/projects');
        if(!response.data) throw new Error
        this.project.projects = response.data;
      } catch (error) {
        console.log("Error to fetch Projects List")
      }
    },

    async deleteProject(id: string) {
      try {
        const response = await clientHttp.delete(`/projects/${id}`)
        if(!response.data || response.status !== 200) throw new Error

        this.project.projects = this.project.projects.filter((item) => item.id !== id);

      } catch (error) {
        console.log("Error");
        console.log("Can't delete Project")
      }
    },
  }
})
