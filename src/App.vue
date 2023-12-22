<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
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