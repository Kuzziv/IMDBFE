<template>
    <div class="movie-form">
      <h2>Update Movie</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="titleType">Title type:</label>
          <input type="text" id="titleType" v-model="movie.titleType" required />
        </div>
        <div class="form-group">
          <label for="primaryTitle">Primary Title:</label>
          <input type="text" id="primaryTitle" v-model="movie.primaryTitle" required />
        </div>
        <div class="form-group">
          <label for="originalTitle">Original Title:</label>
          <input type="text" id="originalTitle" v-model="movie.originalTitle" required />
        </div>
        <div class="form-group">
          <label for="isAdult">Is Adult:</label>
          <select id="isAdult" v-model="movie.isAdult" required>
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="startYear">Start Year:</label>
          <input type="number" id="startYear" v-model="movie.startYear" required />
        </div>
        <div class="form-group">
          <label for="endYear">End Year:</label>
          <input type="number" id="endYear" v-model="movie.endYear" />
        </div>
        <div class="form-group">
          <label for="runtime">Runtime (Minutes):</label>
          <input type="number" id="runtime" v-model="movie.runtimeMinutes" />
        </div>
        <div class="form-group">
          <label for="genreNames">Genres (comma separated):</label>
          <input type="text" id="genreNames" v-model="movie.genreNames" />
        </div>
        <button type="submit">{{ submitButtonText }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/service/api.js';
  
  export default {
    props: {
      movieData: {
        type: Object,
        required: true
      },
      submitButtonText: {
        type: String,
        default: 'Submit'
      }
    },
    data() {
      return {
        // Use movieData to pre-fill the form fields for movie update
        movie: { ...this.movieData }
      };
    },
    methods: {
      async submitForm() {
        // Split the genres string by comma and trim each genre
        const genresArray = this.movie.genreNames.split(',').map(genre => genre.trim());
        
        // Update the movie object with the genres array
        this.movie.genreNames = genresArray;
  
        try {
          // Make API call to update movie
          const response = await apiClient.put(`/movie/${this.movie.tconst}`, this.movie);
          console.log('Response:', response.data);
          // Redirect to movie page or perform other actions upon successful update
        } catch (error) {
          console.error('Error updating movie:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  .movie-form {
    max-width: 400px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  </style>
  