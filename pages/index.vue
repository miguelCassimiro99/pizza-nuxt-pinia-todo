<script setup lang="ts">
import TodoListView from '~~/components/TodoListView.vue';
import { useProjectsStore } from '~~/stores/projects';
import { useToDoStore } from '~~/stores/todo';
import { useUiStore } from '~~/stores/ui';

const uiStore = useUiStore()
const todoStore = useToDoStore()
const projectsStore = useProjectsStore()

onMounted( async() => {
  await projectsStore.getProjectList()
})

async function update() {
  await todoStore.editTodoItem(todoStore.selectedTodo)
  await todoStore.getTodoList();
  uiStore.closeModal()
}

async function cancelUpdate() {
  uiStore.closeModal()
  await todoStore.getTodoList()
}

</script>
<template>
<section class="relative h-full overflow-x-hidden">
  <h2 class="text-2xl mb-10 font-bold md:hidden">ToDo List</h2>
  <div class="flex w-full justify-center">
    <LayoutNavbarComponent />
  </div>

  <ClientOnly>
    <Teleport to="body">
      <UiModalComponent title="Edit Todo">
        <div class="flex flex-col gap-2 w-full">
          <label for="description" class="text-white text-sm">Todo Description</label>
          <input
            name="description"
            id="description"
            class="px-2 rounded-lg"
            type="text"
            v-model="todoStore.selectedTodo.description"
          >
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="project" class="text-white text-sm">Project</label>
          <select id="project" v-model="todoStore.selectedTodo.project" class="px-2 rounded-lg py-1">
            <option :value="null">No Project</option>
            <option
              v-for="(project, index) in projectsStore.project.projects"
              :key="index"
              :value="project"
            >{{ project.name }}</option>
          </select>
        </div>

        <div class="flex justify-end w-full gap-2 md:gap-4">
          <button
            @click="update()"
            class="shadow-md shadow-dark-theme rounded-lg bg-primary text-white flex justify-center items-center px-3 py-1"
          >
            <span>Update</span>
          </button>
          <button
            @click="cancelUpdate()"
            class="shadow-md shadow-dark-theme rounded-lg bg-pink-700 text-white flex justify-center items-center px-3 py-1"
          >
            <span>Cancel</span>
          </button>
        </div>
      </UiModalComponent>
    </Teleport>
  </ClientOnly>


  <TodoListView />


</section>


</template>
<style scoped>
</style>