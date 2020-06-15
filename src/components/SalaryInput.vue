<template>
  <div>
    <form v-if="!showFeedback" @submit.stop.prevent="submitForm">
      <label for="salary">{{ formText }}</label><br>
      <input class="salary-input" type="number" id="salary" name="salary" min="1" v-model="input" :disabled="salarywasEntered" required><br>
      <input type="submit" value="Submit" :disabled="salarywasEntered">
    </form>
    <FeedbackMessage
      v-if="showFeedback"
      :employeeMin="employeeMin"
      :employerMax="employerMax"
      :feedbackMessage="showFeedback"/>
  </div>
</template>

<script>
import FeedbackMessage from '@/components/FeedbackMessage.vue'

export default {
  name: 'SalaryInput',
  components: {
    FeedbackMessage
  },
  props: {
    copy: String,
    role: String,
    salarywasEntered: Number
  },
  data () {
    return {
      formText: this.copy,
      input: null
    }
  },
  created () {
    if (this.salarywasEntered) {
      this.formText = 'Salary already entered'
    }
  },
  computed: {
    employerMax () {
      return this.$store.state.employerMax
    },
    employeeMin () {
      return this.$store.state.employeeMin
    },
    showFeedback () {
      return this.$store.state.negotiationResult
    }
  },
  methods: {
    submitForm () {
      // Add check if all numbers entered in form !!
      const salaryInput = parseInt(this.input, 10)
      if (this.role === 'employee') {
        this.$store.commit('setEmployeeInput', salaryInput)
      } else {
        this.$store.commit('setEmployerInput', salaryInput)
      }
      this.input = null
      this.formText = 'Thanks for submitting your offer!'
      this.evaluateOffers()
    },
    evaluateOffers () {
      if (this.employerMax && this.employeeMin) {
        this.$store.dispatch('evaluateInputs')
      }
    }
  }
}
</script>

<style scoped lang="sass">
.salary-input
  width: 150px
  margin-top: 20px
  margin-bottom: 20px
  padding: 5px

input[type="submit" i]
  width: 100px
  padding: 5px 10px
  background: #42b983
  color: white
  font-size: 16px
  border: none
  border-radius: 11px
  transition: background .2s ease-out

  &:hover
    background: #0E8E60
    cursor: pointer

  &:disabled
    background: #c5c5c5

</style>
