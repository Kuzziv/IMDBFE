<template>
  <div>
    <Navbar />
    <h1>Welcome to the movie page for IMDB assignment!</h1>

    <!-- Search by Title -->
    <div>
      <label for="searchTitle">Search by Title:</label>
      <input type="text" id="searchTitle" v-model="searchTitle" />
      <button @click="searchByTitle">Search</button>
    </div>

    <!-- Search by Tconst -->
    <div>
      <label for="searchTconst">Search by Tconst:</label>
      <input type="text" id="searchTconst" v-model="searchTconst" />
      <button @click="getByTconst">Search</button>
    </div>

    <!-- Get all Movies-->
    <div>
      <button @click="getAllMovies">Get All Movies</button>
    </div>

    <!-- Create Movie -->
    <div>
      <button @click="goToCreateForm">Create Movie</button>
    </div>

    <!-- Pagination controls -->
    <div>
      <button @click="goToPreviousPage" :disabled="currentPage === 1 || !paginationEnabled">Previous Page</button>
      <button @click="goToNextPage" :disabled="!paginationEnabled">Next Page</button>
      <span>{{ currentPage }}</span>
      <button @click="resetPage">Reset Page</button>
    </div>

    <!-- Render movie table component -->
    <div v-if="allMovies.length > 0">
      <MovieTable :movies="allMovies" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MovieTable from '@/components/MovieComps/MovieTable.vue';
import apiClient from '@/service/api.js';

export default {
  name: 'MoviePage',
  components: {
    Navbar,
    MovieTable
  },
  data() {
    return {
      allMovies: [],
      currentPage: 1,
      pageSize: 20,
      searchTitle: '',
      searchTconst: '',
      paginationEnabled: false // Flag to indicate whether pagination is enabled
    };
  },
  methods: {
    async getAllMovies() {
      this.paginationEnabled = true; // Set pagination flag to true
      try {
        const response = await apiClient.get(`/movie/all?page=${this.currentPage}&pageSize=${this.pageSize}`);
        console.log('Response:', response.data);
        this.allMovies = response.data;
        this.totalMovies = response.data.totalCount;
      } catch (error) {
        console.error('Error fetching all movies:', error);
      }
    },
    async goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        await this.fetchMovies();
      }
    },
    async goToNextPage() {
      this.currentPage += 1;
      await this.fetchMovies();
    },
    async searchByTitle() {
      this.paginationEnabled = true; // Set pagination flag to true
      try {
        const response = await apiClient.get(`/movie/search?searchTitle=${this.searchTitle}&page=${this.currentPage}&pageSize=${this.pageSize}`);
        this.allMovies = response.data;
        console.log('Search results by title:', response.data);
      } catch (error) {
        console.error('Error searching by title:', error);
      }
    },
    async getByTconst() {
      this.paginationEnabled = false; // Set pagination flag to false
      try {
        const response = await apiClient.get(`/movie/${this.searchTconst}`);
        this.allMovies = [response.data];
        console.log('Movie details by Tconst:', response.data);
      } catch (error) {
        console.error('Error getting movie by Tconst:', error);
      }
    },
    async fetchMovies() {
      if (this.searchTitle) {
        await this.searchByTitle();
      } else {
        await this.getAllMovies();
      }
    },
    async resetPage() {
      this.currentPage = 1;
    },
    goToCreateForm() {
      this.$router.push('/movie/create');
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
</style>
