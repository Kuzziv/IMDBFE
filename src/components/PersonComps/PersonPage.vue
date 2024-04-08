<template>
  <div>
    <Navbar />
    <h1>Welcome to the person page for IMDB assignment!</h1>

    <!-- Search by Title -->
    <div>
      <label for="searchName">Search by Name:</label>
      <input type="text" id="searchName" v-model="searchName" />
      <button @click="searchByName">Search</button>
    </div>

    <!-- Search by Tconst -->
    <div>
      <label for="searchNconst">Search by Nconst:</label>
      <input type="text" id="searchNconst" v-model="searchNconst" />
      <button @click="getByNconst">Search</button>
    </div>

    <!-- Get all persons-->
    <div>
      <button @click="getAllpersons">Get All persons</button>
    </div>

    <!-- Create person -->
    <div>
      <button @click="goToCreateForm">Create person</button>
    </div>

    <!-- Pagination controls -->
    <div>
      <button @click="goToPreviousPage" :disabled="currentPage === 1 || !paginationEnabled">Previous Page</button>
      <button @click="goToNextPage" :disabled="!paginationEnabled">Next Page</button>
      <span>{{ currentPage }}</span>
      <button @click="resetPage">Reset Page</button>
    </div>

    <!-- Render person table component -->
    <div v-if="allpersons.length > 0">
      <PersonTable :persons="allpersons" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import apiClient from '@/service/api.js';
import PersonTable from './PersonTable.vue';

export default {
  name: 'PersonPage',
  components: {
    Navbar,
    PersonTable
  },
  data() {
    return {
      allpersons: [],
      currentPage: 1,
      pageSize: 20,
      searchName: '', // Corrected variable name
      searchNconst: '',
      paginationEnabled: false // Flag to indicate whether pagination is enabled
    };
  },
  methods: {
    async getAllpersons() {
      this.paginationEnabled = true;
      try {
        const response = await apiClient.get(`/person/all?page=${this.currentPage}&pageSize=${this.pageSize}`);
        console.log('Response:', response.data);
        this.allpersons = response.data;
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    },
    async searchByName() {
      try {
        const response = await apiClient.get(`/person/search?searchName=${this.searchName}&page=${this.currentPage}&pageSize=${this.pageSize}`);
        this.allpersons = response.data;
      } catch (error) {
        console.error('Error searching persons:', error);
      }
    },
    async getByNconst() {
      try {
        const response = await apiClient.get(`/person/${this.searchNconst}`);
        this.allpersons = [response.data]; // Wrap single result in an array
      } catch (error) {
        console.error('Error fetching person by Nconst:', error);
      }
    },
    async goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        await this.getAllpersons(); // Corrected method name
      }
    },
    async goToNextPage() {
      this.currentPage += 1;
      await this.getAllpersons(); // Corrected method name
    },
    async resetPage() {
      this.currentPage = 1;
      await this.getAllpersons(); // Corrected method name
    },
    goToCreateForm() {
      this.$router.push({ name: 'CreatePerson' });
    }
  }
}
</script>


<style>
/* Add your CSS styles here */
</style>
