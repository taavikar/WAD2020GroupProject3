<template>
  <div class="home">
    <NavBar/>
    <section class="main-container">
      <div v-for="post in posts" :key="post">
        <Post :post="post"></Post>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";

export default {
  name: 'Home',
  components: {
    NavBar,
    Post
  },
  //
  computed: {
    posts: function () {
      return this.$store.getters.getPosts
    }
  },
  // enne komponendi loomist käivitatakse getPosts main.js-is, laetakse post-id API-st ära ja siis minnakse komponendi loomisega edasi.
  //TODO find the cause of errors in console, fix them
  beforeCreate() {
    this.$store.dispatch('findPostsFromAPI')
  }
}
</script>

<style>
body {
  background-color: #0277bd;
}

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>