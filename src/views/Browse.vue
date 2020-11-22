<template>
  <div class = "browse">
    <NavBar/>
      <section class="main-container">
        <Profile :index="index | decrementByOne(index)" v-for="index in profilesLength" :key="index"></Profile>
    </section>
    </div>
    <!-- Not 100% sure about CSS -->
</template>
<script>
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile"
export default {
  name: 'Browse',
  components:{
    NavBar,
    Profile
  },
  computed: {
    profilesLength: function(){
      return this.$store.getters.getProfilesLength
    }
  },
  filters: {
    decrementByOne: index => index-1
  },
  beforeCreate(){
    this.$store.dispatch('findProfilesFromAPI')
  }
}
</script>

<style scoped>
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