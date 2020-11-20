<template>
  <div class="avatar-container">

    <img class="avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" v-on:click="toggle()">
    <div class="drop-down-container" v-if="active">
      <hr/>
      <div id="user-name">{{avatarInfo.firstname}} {{avatarInfo.lastname}}</div>
      <hr/>
      <div id="user-email">{{avatarInfo.email}}</div>
      <hr/>
      <div>
        <router-link to="/browse">Browse</router-link>
      </div>
      <hr/>
      <div>
        <router-link to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AvatarButton",
  components: {

  },
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
    },
    close (e) {
      if (!this.$el.contains(e.target)){
        this.active = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
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
div div a {
  margin: 5px 5px 5px 5px;
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
#user-name{
  margin: 5px 5px 5px 5px
}
#user-email{
  margin: 5px 5px 5px 5px
}
.separator {
  border: #263238;
}
.drop-down-container{
  background: white;
  text-align: left;
  font-family: Arial;
  font-weight: bolder;
  display: inherit;
  margin-left: 50%;
}
</style>