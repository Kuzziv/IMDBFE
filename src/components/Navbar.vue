<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/movie">Movies</router-link></li>
        <li><router-link to="/person">People</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarDefault'
  }
  </script>
  
  <style>
  /* Add your CSS styles here */
  nav {
    background-color: #333;
    color: #fff;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  