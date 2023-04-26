import { expect, it, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils';
import SideBarComponentVue from '~~/components/layout/SideBarComponent.vue';

test('SidebarComponent', () => {
  it("It should render a vue component", () => {
    const wrapper = mount(SideBarComponentVue)
    expect(wrapper.vm).toBeTruthy()
  })

  it("Must contain to Links", () => {
    const wrapper = shallowMount(SideBarComponentVue);
    const links = wrapper.findAll('a');
    expect(links).toHaveLength(2);
  })
})