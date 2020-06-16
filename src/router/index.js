import Vue from 'vue'
import VueRouter from 'vue-router'
import Employer from '../views/Employer.vue'
import Employee from '../views/Employee.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'employer',
    component: Employer
  },
  {
    path: '/employee',
    name: 'employee',
    component: Employee
  }
]

const router = new VueRouter({
  routes
})

export default router
