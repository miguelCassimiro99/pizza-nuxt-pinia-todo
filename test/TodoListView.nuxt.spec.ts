import { expect, it, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils';
import { todoListMock } from '../public/mock/ToDoList';
import TodoListViewVue from '~~/components/TodoListView.vue';



test("TodoList view", () => {
  it('Should test the TodoListView Screen', () => {
    const wrapper = mount(TodoListViewVue, {
      global: {
        provide: {
          todoListMock
        }
      }
    })
    const cards = wrapper.findAll('.card')
    console.log(cards)
    expect(cards).toHaveLength(2)
  })
})