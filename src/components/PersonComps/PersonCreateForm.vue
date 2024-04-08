<template>
    <div class="person-form">
      <h2>Create a person</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="primaryName">Primary Name:</label>
          <input type="text" id="primaryName" v-model="person.primaryName" required />
        </div>
        <div class="form-group">
          <label for="birthYear">Birth Year:</label>
          <input type="number" id="birthYear" v-model="person.birthYear" />
        </div>
        <div class="form-group">
          <label for="deathYear">Death Year:</label>
          <input type="number" id="deathYear" v-model="person.deathYear" />
        </div>
        <div class="form-group">
          <label for="professionNames">Profession Names (comma separated):</label>
          <input type="text" id="professionNames" v-model="professionNames" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/service/api.js';
  //import { useRouter } from '@/router/index.js'; 

  export default {
    data() {
      return {
        person: {
          nconst: '',
          primaryName: '',
          birthYear: 0,
          deathYear: 0,
          professionNames: []
        },
        professionNames: '' // temporary storage for profession names before splitting
      };
    },
    methods: {
      async submitForm() {
        // Split the profession names string by comma and trim each profession
        const professionsArray = this.professionNames.split(',').map(profession => profession.trim());
        
        // Update the person object with the profession names array
        this.person.professionNames = professionsArray;
  
        try {
            const response = await apiClient.post('/person', this.person);
            console.log('Person created:', response.data);
            // Redirect to person page or perform other actions upon successful creation


        } catch (error) {
          console.error('Error creating person:', error);
        }        
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  .person-form {
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
