<template>
  <div>
    <h2>Movie List</h2>
    <table class="movie-table">
      <thead>
        <tr>
          <th>Tconst</th>
          <th>Title Type</th>
          <th>Primary Title</th>
          <th>Original Title</th>
          <th>Is Adult</th>
          <th>Start Year</th>
          <th>End Year</th>
          <th>Runtime (Minutes)</th>
          <th>Genres</th>
          <th>Actions</th> <!-- New column for actions -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.tconst">
          <td>{{ movie.tconst }}</td>
          <td>{{ movie.titleType }}</td>
          <td>{{ movie.primaryTitle }}</td>
          <td>{{ movie.originalTitle }}</td>
          <td>{{ movie.isAdult }}</td>
          <td>{{ movie.startYear }}</td>
          <td>{{ movie.endYear }}</td>
          <td>{{ movie.runtimeMinutes }}</td>
          <td>{{ movie.genreNames.join(', ') }}</td>
          <td>
            <!-- Example actions: edit and delete -->
            <button @click="goToUpdateForm(movie)">Update</button>
            <button @click="deleteMovie(movie)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { router } from '@/router/index.js'; 
import apiClient from '@/service/api.js';

export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  methods: {
    async deleteMovie(movie) {
      try {
        const response = await apiClient.delete(`/movie/${movie.tconst}`);
        console.log('Response:', response.data); 
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    },
    goToUpdateForm(movie) {
      router.push({ name: 'UpdateMovie', params: { tconst: movie.tconst } });
    }
  }
}
</script>

<style scoped>
/* Table Styles */
.movie-table {
  width: 100%;
  border-collapse: collapse;
}

/* Header Styles */
.movie-table th {
  background-color: #f2f2f2;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

/* Row Styles */
.movie-table td {
  border: 1px solid #dddddd;
  padding: 8px;
}

/* Alternating Row Color */
.movie-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
