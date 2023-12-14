<template>
  <div class="app">
    <Menu></Menu>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

var Event = new Vue();

export default {
  name: 'App',
  components: {
    Menu,
    Main,
    Footer,
  },
}
</script>

<style>
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
</style>
