<template>
  <div>
    <SalaryInput :copy="inputText" role="employer" :salarywasEntered="salaryInput"/>
  </div>
</template>

<script>
import SalaryInput from '@/components/SalaryInput.vue'

export default {
  name: 'Employer',
  components: {
    SalaryInput
  },
  data () {
    return {
      inputText: 'Please enter maximum offer in EUR:'
    }
  },
  computed: {
    salaryInput () {
      return this.$store.state.employerMax
    }
  }
}
</script>
