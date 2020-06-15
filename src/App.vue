<template>
  <div id="app">
    <div class="salary-form">
      <div class="tabs">
        <router-link to="/employer">Employer</router-link> |
        <router-link to="/employee">Employee</router-link>
      </div>
      <router-view/>
    </div>
    <p class="weather">Weather in London: {{ weather }} °C</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      weather: null
    }
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=e57adfa610a9a5eb4c5320ff0636fe61')
      .then(response => {
        this.weather = response.data.main.temp
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}
</script>

<style lang="sass">
$shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)

#app
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 100px
  font-family: Avenir, Helvetica, Arial, sans-serif
  text-align: center
  color: #2c3e50

.tabs
  padding: 25px

  a
    color: #2c3e50
    text-decoration: none

    &.router-link-exact-active
      color: #42b983
      font-weight: bold

.salary-form
  width: 40%
  padding: 30px
  box-shadow: $shadow
  border-radius: 2px

  @media only screen and (max-width: 600px)
    width: 70%

.weather
  width: 40%
  margin-top: 80px
  padding: 10px
  box-shadow: $shadow
  border-radius: 2px

  @media only screen and (max-width: 600px)
    width: 70%

</style>
