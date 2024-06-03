<script>
  export default {
    name: 'Header'
  }
</script>

<template>
  <div>
<header>
  <nav>
    <ul>
      <li> <router-link :to="{name:'home'}">Home</router-link> </li>
      <li> <router-link :to="{name:'about'}">Chi siamo</router-link> </li>
      <li> <router-link :to="{name:'contacts'}">Contatti</router-link> </li>
    </ul>
  </nav>
</header>
  </div>
</template>


<style lang="scss" scoped>
header{
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    li{
      list-style: none;
      a{
        color: black;
        padding: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
          text-decoration: underline;
        }
      }
    }

  }
}
</style>