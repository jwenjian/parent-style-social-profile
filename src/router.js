import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from './pages/WelcomePage'
import ExplorePage from './pages/ExplorePage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'Welcome',
      path: '/',
      component: WelcomePage
    },
    {
      name: 'Explore',
      path: '/explore',
      component: ExplorePage
    }
  ]
})

export default router;