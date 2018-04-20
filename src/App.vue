<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import start from "./components/main/Start";

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  max-width: 1200px;
  width: 100%;
  margin:60px auto 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;    
}
</style>
