interface IState {
  modal: IModal
}

interface IModal {
  modalOpen: boolean
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    modal: {
      modalOpen: false,
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