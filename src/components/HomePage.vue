<template>
  <div class="app">
    <Menu></Menu>
    <div class="app1">
      <div class="app-inner">
        <div class="home">
          <div class="home-inner">Приветствую, {{ user }}</div>
          <div class="home-inner">Все устройства готовы к работе</div>
          <router-link to="/myhome" custom v-slot="{ navigate }" class="home-inner">
            <button class="nav" @click="navigate" role="link">Далее ></button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      user: "User",
    }
  },
  components: {
    Menu,
    Footer,
  }
}
</script>

<style scoped>
* {
  font-family: "Comfortaa", monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: #BCC3BC;
  padding: 10px;
  height: 100vh;
}

.app1 {
  height: 70vh; 
  background-color: #4F5A4E;
  background-image: url("../assets/home.jpg");
  border-radius: 10px;
}

.app-inner {
  height: 70vh; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.home {
  width: 600px;
  height: 400px;
  background-color: #373937;
  color: #ffffff;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.home-inner {
  margin: 15px 0 15px 0;
}

.nav {
  font-size: 30px;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  color: #373937;
  cursor: pointer;
}
</style>