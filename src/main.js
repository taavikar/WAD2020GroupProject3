import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import axios from "axios";
import Home from "@/views/Home"
import Login from "@/views/Login"
import Browse from "@/views/Browse";

// function loadPosts() {
//   axios.get('https://private-anon-5c37796155-wad20postit.apiary-mock.com/posts')
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       console.log("Could not load posts from API. " + error);
//     })
// }

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', name: "home", component: Home},
  {path: '/login',name: "login",  component: Login},
  {path: '/minions', name: "browse", component: Browse},
  // {path: '*', component: NotFound}   //TODO if there's time, would be nice to have a NotFound page also
];

const router = new VueRouter({
  routes,
});

const store = new Vuex.Store({
  
  // these are class fields in java. Here you store all the data.
  state: {
    posts: [
      {
        "id": 1,
        "author": {
          "firstname": "Gordon",
          "lastname": "Freeman",
          "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        "createTime": "Sep 18, 2020 15:16",
        "text": "I think it's going to rain",
        "media": {
          "type": "image",
          "url": "http://www.pastatdude.com/uploaded_images/hl2-2007-10-20-16-36-36-32-713089.jpg"
        },
        "likes": "15k"
      },
      {
        "id": 2,
        "author": {
          "firstname": "John",
          "lastname": "Doe",
          "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        },
        "createTime": "Sep 18, 2020 16:17",
        "text": "Which weighs more, a pound of feathers or a pound of bricks?",
        "media": null,
        "likes": "25k"
      },
      {
        "id": 3,
        "author": {
          "firstname": "Bruce",
          "lastname": "Wayne",
          "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        "createTime": "Sep 18, 2020 17:18",
        "text": "Felt cute, might delete later",
        "media": {
          "type": "image",
          "url": "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg"
        },
        "likes": "100k"
      },
      {
        "id": 4,
        "author": {
          "firstname": "Richard",
          "lastname": "Stallman",
          "avatar": "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        },
        "createTime": "Sep 18, 2020 18:19",
        "text": null,
        "media": {
          "type": "video",
          "url": "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
        },
        "likes": "1k"
      }
    ]
  },
  // actions are public setters in java, these can be asynchronous
  // Kui sul on vaja mõnes komponendis 'asynchronously' infot uuendada, siis pead kutsuma välja actions (this.$store.dispatch.....),
  // siin kutsub actions välja mutationite alt õige meetodi (this.mutations.commit......). VIST peaks nii olema, aga do your own research
  actions: {
  
  },
  // private setters in java, these are synchronous
  mutations: {
  
  },
  
  // public getters in java
  getters: {
    getPosts: function (state) {
      console.log("inside getPosts: " + state.posts);
  
      // if (state === undefined) {
      //   console.log("HOW THE FUCK AM I UNDEFINED");
      //   return "fu"
      // }
      
      return state.posts
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
