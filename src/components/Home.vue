<template>
    <div>
      <Navbar />
      <h1>Welcome to My Vue App for IMDB assignment!</h1>
      <p>This is the home page of your Vue app.</p>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue' // Adjust the path accordingly
  
  export default {
    name: 'HomePage',
    components: {
      Navbar
    }
  }
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  