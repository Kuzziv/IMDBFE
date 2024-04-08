import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import MoviePage from '../components/MovieComps/MoviePage.vue';
import PersonPage from '../components/PersonComps/PersonPage.vue';
import PersonCreateForm from '../components/PersonComps/PersonCreateForm.vue';
import MovieCreateForm from '../components/MovieComps/MovieCreateForm.vue'; 
import MovieUpdateForm from '../components/MovieComps/MovieUpdateForm.vue'; 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/movie',
    name: 'MoviePage',  
    component: MoviePage
  },
  {
    path: '/movie/create', // Route for creating a new movie
    name: 'CreateMovie',  
    component: MovieCreateForm // Use the MovieCreateForm component for creating a new movie
  },
  {
    path: '/movie/update/:tconst', // Route for updating an existing movie, using tconst as a parameter
    name: 'UpdateMovie',  
    component: MovieUpdateForm // Use the MovieUpdateForm component for updating a movie
  },
  {
    path: '/person',
    name: 'PersonPage',  
    component: PersonPage
  } ,
  {
    path: '/person/create', // Route for creating a new person
    name: 'CreatePerson',  
    component: PersonCreateForm // Use the PersonCreateForm component for creating a new person
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router, routes }; // Export both router and routes
