import { expect, it, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils';
import NavbarComponentVue from '~~/components/layout/NavbarComponent.vue';

test('NavbarComponent', () => {
  it("It should render a vue component", () => {
    const wrapper = mount(NavbarComponentVue)
    expect(wrapper.vm).toBeTruthy()
  })

  it("Must contain to Links", () => {
    const wrapper = shallowMount(NavbarComponentVue);
    const input = wrapper.findAll('input');
    expect(input).toHaveLength(1);
  })
})