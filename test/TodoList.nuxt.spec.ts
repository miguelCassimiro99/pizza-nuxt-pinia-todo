import { expect, it, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils';
import { todoListMock } from '../public/mock/ToDoList';
import TodoListViewVue from '~~/components/TodoListView.vue';
import { useToDoStore } from '../stores/todo'


test("TodoList view", () => {
  it("Should create a ToDo List with 3 items", () => {

    const store = useToDoStore();

    const descritpionItemA = "a";
    const descriptionItemB = "b";
    
    store.addToDoItem(descritpionItemA);
    store.addToDoItem(descriptionItemB);

    const length = store.todo.todos.length

    expect(length).toHaveLength(4);
    store.$reset()

  })
})