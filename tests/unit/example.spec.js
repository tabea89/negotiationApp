import { shallowMount } from '@vue/test-utils'
import SalaryInput from '@/components/SalaryInput.vue'
import FeedbackMessage from '@/components/FeedbackMessage.vue'

describe('SalaryInput.vue', () => {
  it('renders copy text when passed', () => {
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

describe('FeedbackMessage.vue', () => {
  it('renders salary number when passed', () => {
    const employerMax = 12
    const wrapper = shallowMount(FeedbackMessage, {
      propsData: { employerMax }
    })
    expect(wrapper.find("p").text()).toContain(employerMax)
  })
})
