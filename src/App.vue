    <script>
    import axios from 'axios'
      export default {
        data(){
          return{

          }
        },

        methods:{
          getApi(){
            axios.get('http://127.0.0.1:8000/api/projects')
              .then(result =>{
                console.log(result.data);
              })
              .catch(error =>{
                console.log(error.message);
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
    prova
  </div>
</template>


<style lang="scss" scoped>

</style>