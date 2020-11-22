<template>
  <div class="home">
    <NavBar/>
    <section class="main-container">
      <div v-for="index in postsLength" :key="index">
        <Post :index="index | decrementByOne(index)"></Post>
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
  computed: {
    postsLength: function () {
      return this.$store.getters.getPostsLength
    }
  },
  filters: {
    decrementByOne: (index) => index-1
  },
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