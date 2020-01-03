<template>
  <div id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/search">search</router-link> | 
    <router-link to="/mypage">mypage</router-link>
  </div>
</template>


<style lang="scss">
  #header {
    background-color: #fafafa;
    height: 50px;
    border-bottom: solid thin #ccc;
    text-align: center;
    
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      vertical-align: middle;
      
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
