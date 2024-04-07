import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movie from '../components/MovieComps/MoviePage.vue'
import Person from '../components/PersonComps/Person.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/movie',
    name: 'MoviePage',  
    component: Movie
  },
  {
    path: '/person',
    name: 'PersonPage',  
    component: Person
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
