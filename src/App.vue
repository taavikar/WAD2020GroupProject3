<template>
  <body id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NavBar from "@/components/NavBar";


export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld
  },
  data() {

  },
  methods: {

  }
}
</script>

<style>
body {
  background-color: #0277bd;
  color: #263238;
}
img{
  height: 30px;
}
</style>
