<template>
  <div>
    <ul>
      <li v-for="item in menuItems" :key="item.id" @click="inWork">
        <router-link v-if="item.index == 1" to="/">{{ item.text }}</router-link>
        <router-link v-else-if="item.index == 2" to="/myhome">{{ item.text }}</router-link>
        <router-link v-else-if="item.index == 3" to="/devices">{{ item.text }}</router-link>
        <p v-else>{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComp',
  data() {
    return {
      menuItems: [
        { id: 1, text: "Главная", index: 1 },
        { id: 2, text: "Мой дом", index: 2 },
        { id: 3, text: "Устройства", index: 3 },
        { id: 4, text: "Сценарии", index: 4 },
      ],
    }
  },
  methods: {
    inWork() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: #ffffff;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: #3B4343;
  border-radius: 10px;
  flex-wrap: wrap; 
}

li {
  padding: 15px;
  border-right: 1px solid #262E26;
  cursor: pointer;
  text-align: center;
  flex: 1; 
}

li:last-child {
  border-right: none;
}

li:hover {
  background-color:#262E26;
}

li:hover:first-child {
  border-radius: 10px 0 0 10px;
}

li:hover:last-child {
  border-radius: 0 10px 10px 0;
}

@media (max-width: 600px) {
  li {
    border-bottom: 1px solid #262E26;
    border-right: none;
  }
}

</style>
