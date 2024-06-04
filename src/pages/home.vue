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
      <li v-for="project in projects" :key="project.id">
        {{ project.id }} -
        <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}">{{ project.title }}</router-link> 
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>