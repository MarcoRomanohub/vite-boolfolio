import { createRouter, createWebHistory } from "vue-router";
import home from './pages/home.vue'
import about from './pages/about.vue'
import contacts from './pages/contacts.vue'
import projectDetail from './pages/projectDetail.vue'
import error404 from './pages/error404.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: about
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: projectDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: error404
    }
  ]
})

export { router }