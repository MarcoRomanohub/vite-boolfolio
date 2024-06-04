    <script>
        import axios from "axios"
        import {store} from '../data/store'

      export default {
        name: 'projectDetail',
        data(){
          return{
            project:{}
          }
        },
        methods:{
          getApi(){
            const slug = this.$route.params.slug;
            axios.get(store.apiUrl2 + 'project-by-slug/' + slug)
              .then(result => {
                console.log(result.data);
                  this.project = result.data.project
              })
              .catch(error => {
                console.log(error.message);
              })
          }
        },
        mounted(){
          this.getApi()
        }
      }
    </script>

<template>
  <div>
    <h1>{{ project.title }}</h1>
  </div>
</template>


<style lang="scss" scoped>

</style>