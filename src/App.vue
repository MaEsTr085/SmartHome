<template>
  <div class="app">
    <Menu></Menu>
    <Devices></Devices>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Devices from './components/MainDevices.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Menu,
    Devices,
    Footer,
  }
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
