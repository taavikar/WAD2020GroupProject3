<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/">
          <img alt="postIt" src="../assets/logo.png">
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <AvatarButton />
    </nav>
  </header>
</template>

<script>
import AvatarButton from "@/components/AvatarButton";
export default {
  name: "NavBar",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AvatarButton,
  }
}
</script>

<style scoped>
#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>