<template>
  <div>
    <h3>Negotiation result: {{ feedbackMessage }}</h3>
    <p>Maximum offer was: {{ employerMax }} EUR</p>
    <p>Minimum offer was: {{ employeeMin }} EUR</p>
    <button @click="resetForm()">Start again</button>
  </div>
</template>

<script>

export default {
  name: 'FeedbackMessage',
  props: {
    employerMax: Number,
    employeeMin: Number,
    feedbackMessage: String
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
