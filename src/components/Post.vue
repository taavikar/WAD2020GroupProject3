<template>
  <div class="post">
    <span class="post-author">
          <span class="post-author-info">
            <img :src="post.author.avatar" :alt="post.author.firstname">
            <small>{{post.author.firstname}} {{post.author.lastname}}</small>
          </span>
      <small>{{post.createTime}}</small>
    </span>
    <div v-if="post.media !== null" class="post-image">
      <img v-if="post.media.type === 'image'" :src="post.media.url" :alt="post.text">
      <video controls v-if="post.media.type === 'video' ">
        <source type="video/mp4" :src="post.media.url"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="post-title">
      <h3>{{post.text}}</h3>
    </div>
    <div class="post-actions">
      <button :class="{'liked': liked}" @click="toggleLiked" type="button" class="like-button">{{post.likes}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    index: Number,
    liked: Boolean
  },
  computed: {
    post: function () {
      return this.$store.getters.getPost(this.index);
    }
  },
  methods: {
    toggleLiked: function () {
      return this.liked = !this.liked
    }
  }
}
</script>

<style scoped>

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 17px;
  left: 50px;
  font-weight: bolder;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}

</style>