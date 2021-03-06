import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicInfo from '../pages/BasicInfo'
import WorkSheet from '../pages/WorkSheet'
import Consultation from '../pages/Consultation'
import Confirm from '../pages/Confirm'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: BasicInfo },
  { path: '/work-sheet', component: WorkSheet },
  { path: '/consultation', component: Consultation },
  { path: '/confirm', component: Confirm }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
