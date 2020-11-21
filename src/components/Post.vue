<template>
  <div class="post-container">
    <h2>Post: {{ posts[index] }}</h2>
    <h2>Author: {{ posts[index].author }}</h2>
    <h2>Media: {{posts[index].media}}</h2>
    <h2>Liked: {{posts[index].likes}}</h2>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    index: Number,
  },
  computed: {
    posts: function () {
      console.log(this.$store.getters.getPosts)
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style scoped>
.post-container {
    height: 500px;
    background-color: #42b983;
  }
</style>