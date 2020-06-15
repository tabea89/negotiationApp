<template>
  <div>
    <SalaryInput :copy="inputText" role="employee" :salarywasEntered="salaryInput"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SalaryInput from '@/components/SalaryInput.vue'

export default {
  name: 'Employee',
  components: {
    SalaryInput
  },
  data () {
    return {
      inputText: 'Please enter minimum offer'
    }
  },
  computed: {
    salaryInput () {
      return this.$store.state.employeeMin
    }
  }
}
</script>
