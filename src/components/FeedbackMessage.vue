<template>
  <div class="form-message">
    <h3>Negotiation result: {{ feedbackMessage }}</h3>
    <p>Maximum offer was: {{ employerMax }}</p>
    <p>Minimum offer was: {{ employeeMin }} </p>
    <button v-if="feedbackMessage === 'Failure'" @click="resetForm()">Try again</button>
  </div>
</template>

<script>

export default {
  name: 'FeedbackMessage',
  data () {
    return {
      inputText: 'Enter maximum offer'
    }
  },
  computed: {
    feedbackMessage () {
      return this.$store.state.negotiationResult
    },
    employerMax () {
      return this.$store.state.employerMax
    },
    employeeMin () {
      return this.$store.state.employeeMin
    }
  },
  methods: {
    resetForm () {
      location.reload()
    }
  }
}
</script>
<style scoped lang="sass">
button
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

</style>
