import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from "axios";
import Home from "@/views/Home"
import Login from "@/views/Login"
import Browse from "@/views/Browse";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', name: "home", component: Home},
  {path: '/login',name: "login",  component: Login},
  {path: '/browse', name: "browse", component: Browse},
];

const router = new VueRouter({
  routes,
});

const store = new Vuex.Store({
  
  // these are class fields in java. Here you store all the data.
  state: {
    posts: [],
    profiles: [],
    avatar: []
  },
  // actions are public setters in java, these can be asynchronous
  actions: {
    findPostsFromAPI({commit}) {
      axios.get('https://private-anon-5c37796155-wad20postit.apiary-mock.com/posts')
        .then(response => commit('SET_POSTS', response.data))
        .catch(error => console.log("Could not fetch posts! " + error))
    },
    findProfilesFromAPI({commit}){
      axios.get("https://private-anon-c71abc3c34-wad20postit.apiary-mock.com/profiles")
      .then(response => commit('SET_PROFILES', response.data))
      .catch(error => console.log("Could not fetch profiles! " + error))
    },
    findAvatarFromAPI({commit}){
      axios.get("https://private-517bb-wad20postit.apiary-mock.com/users/1")
          .then(response => commit('SET_AVATAR', response.data))
          .catch(error => console.log("Could not fetch profiles! " + error))
    }
  },
  
  // private setters in java, these are synchronous
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_PROFILES(state, profiles){
      state.profiles = profiles
    },
    SET_AVATAR(state, avatar){
      state.avatar = avatar
    }
  },
  
  // public getters in java
  getters: {
    getPostsLength: state => state.posts.length,
    getPost: state => index => state.posts[index],
    getProfilesLength: state => state.profiles.length,
    getProfile: state => index => state.profiles[index],
    getAvatar: state => state.avatar
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
