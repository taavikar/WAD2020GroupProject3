<template>
  <div class="avatar-container">

    <img class="avatar" v-on:click="toggle()">
    <div class="drop-down-container" v-if="active">
      <span id="user-name">{{avatarInfo.firstname}} {{avatarInfo.lastname}}</span>
      <span id="user-email">{{avatarInfo.email}}</span>
      <span class="separator"></span>
      <span>
              <a href="browse.html">Browse</a>
            </span>
      <span class="separator"></span>
      <span>
              <a href="login.html">Log Out</a>
            </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AvatarButton",
  components: {

  },
  props: ["avatarInfo"],
  data () {
    return {
      avatarInfo: [],
      active: false
    }
  },
  created() {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
      .then(res => this.avatarInfo = res.data)
      .catch(err => console.log(err));
  },
  methods: {
    toggle () {
      this.active = !this.active
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
div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}
</style>