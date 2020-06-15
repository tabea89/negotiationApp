<template>
  <div>
    <SalaryInput :copy="inputText" role="employer" :salarywasEntered="salaryInput"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SalaryInput from '@/components/SalaryInput.vue'

export default {
  name: 'Employer',
  components: {
    SalaryInput
  },
  data () {
    return {
      inputText: 'Please enter maximum offer'
    }
  },
  computed: {
    salaryInput () {
      return this.$store.state.employerMax
    }
  }
}
</script>
