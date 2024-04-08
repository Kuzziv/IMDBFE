<template>
    <div>
      <h2>Person List</h2>
      <table class="person-table">
        <thead>
          <tr>
            <th>Nconst</th>
            <th>Primary Name</th>
            <th>Birth Year</th>
            <th>Death Year</th>
            <th>Professions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in persons" :key="person.nconst">
            <td>{{ person.nconst }}</td>
            <td>{{ person.primaryName }}</td>
            <td>{{ person.birthYear }}</td>
            <td>{{ person.deathYear }}</td>
            <td>{{ person.professionNames.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      persons: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteperson(person) {
        // Implement delete functionality
        console.log('Deleting person:', person);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Table Styles */
  .person-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  /* Header Styles */
  .person-table th {
    background-color: #f2f2f2;
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }
  
  /* Row Styles */
  .person-table td {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  
  /* Alternating Row Color */
  .person-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  