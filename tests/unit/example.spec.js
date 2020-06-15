import { shallowMount } from '@vue/test-utils'
import SalaryInput from '@/components/SalaryInput.vue'

describe('SalaryInput.vue', () => {
  it('renders props.copy when passed', () => {
    const copy = 'new copy'
    const wrapper = shallowMount(SalaryInput, {
      propsData: { copy },
      computed: {
        showFeedback () {
          return ''
        }
      }
    })
    expect(wrapper.text()).toMatch(copy)
  })
})

/* function getshallowMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('SalaryInput', () => {
  it('renders correctly with different props', () => {
    expect(
      getshallowMountedComponent(SalaryInput, {
        copy: 'Hello'
      }).text()
    ).toBe('Hello')

    expect(
      getshallowMountedComponent(SalaryInput, {
        copy: 'Bye'
      }).text()
    ).toBe('Bye')
  })
}) */
