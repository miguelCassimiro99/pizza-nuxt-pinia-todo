import { IMenuItems } from "~~/types"

interface IState {
  modal: IModal
  menu: IMenuItems
}

interface IModal {
  modalOpen: boolean,
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    modal: {
      modalOpen: false,
    },
    menu: {
      menuItems: [
        {
          label: "ToDos",
          url: "/",
          icon: "solar:checklist-minimalistic-broken"
        },
        {
          label: "Projects",
          url: "/projects",
          icon: "eos-icons:project-outlined"
        }
      ]
    }
  } as IState ),
  actions: {
    openModal() {
      this.modal.modalOpen = true
    },
    closeModal() {
      this.modal.modalOpen = false
    }
  }
})