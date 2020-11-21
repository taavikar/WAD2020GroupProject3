<template>
  <div class="home">
    <NavBar/>
    <section class="main-container">
      <div v-for="index in posts.length" :key="index">
        <Post :index="(index-1)"></Post>
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
    posts: function () {

      // if (this === undefined) {
      //   console.log("no fucking me");
      //   return
      // }
      // if (this.$store === undefined) {
      //   console.log("no store");
      //   return
      // }
      // if (this.$store.getters === undefined) {
      //   console.log("no getters");
      //   return
      // }
      // if (this.$store.getters.getPosts === undefined) {
      //   console.log("getPosts is not defined ?!?!?!?!?!?!?");
      //   return
      // }
      // console.log("from here" + this.$store.getters.getPosts[0].id);
      // console.log("from here" + this.$store.getters.getPosts[1].id);
      // console.log("from here" + this.$store.getters.getPosts[2].id);
      // console.log("from here" + this.$store.getters.getPosts[3].id);
      return this.$store.getters.getPosts
    }
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