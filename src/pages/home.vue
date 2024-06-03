    <script>
    import { store } from '@/data/store';
    import axios from 'axios';
      export default {
        name: 'Home',
        data(){
          return{
            projects:[]
          }
        },
        methods:{
          getApi(){
            axios.get(store.apiUrl)
              .then(result => {
                this.projects=result.data
              })
              .catch( error => {

              })
          }
        },
        mounted(){
          this.getApi();
        }

      }
    </script>

<template>
  <div>
    <h1>I miei Post</h1>
    <ul>
      <li v-for="projects in projects" :key="projects.id">{{ projects.id }} - {{ projects.title }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>