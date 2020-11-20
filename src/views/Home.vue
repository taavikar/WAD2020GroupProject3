<template>
  <div class="home">
    <NavBar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "@/components/NavBar";

export default {
  name: 'Home',
  components: {
    NavBar,
    HelloWorld
  }
}
</script>

<style>
body {
  background-color: #0277bd;
}
</style>