import { mount } from '@vue/test-utils'
import Main from '@/pages/Index.vue'

describe('Main', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Main)
    expect(wrapper.vm).toBeTruthy()
  })
})
