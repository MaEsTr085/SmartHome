<template>
    <div class="app">
        <Menu></Menu>
        <div class="app1">
            <div class="app-inner">
                <div class="room" v-for="room in roomList" :key="room.id" :class="{'isDisplay': room.isDisplay}">
                    <div><img :src="room.image" alt=""></div>
                    <div>{{ room.roomName }}</div>
                    <div v-if="room.deviceCount == 0">Нет устройств</div>
                    <div v-else-if="room.deviceCount == 1">1 устройство</div>
                    <div v-else-if="room.deviceCount >= 2 && room.deviceCount < 5">{{ room.deviceCount }} устройства</div>
                    <div v-else>{{ room.deviceCount }} устройств</div>
                    <button @click="SetDispay(room.id)">Подробнее</button>
                </div>
                <div class="roomAdv" v-for="roomadv in roomListAdv" :key="roomadv.id" :class="{'isDisplay': roomadv.isDisplay}">
                    <div>{{ roomadv.roomName }}</div>
                    <button @click="SetBack">Назад</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

import image_lr from '../assets/living-room.png'
import image_kt from '../assets/kitchen.png'
import image_br from '../assets/bedroom.png'

export default {
name: 'MyHome',
data() {
    return {
        currentId: 0,
        roomList: [
            { id: 1, roomName: "Гостиная", deviceCount: 3, image: image_lr, isDisplay: false },
            { id: 2, roomName: "Кухня", deviceCount: 1, image: image_kt, isDisplay: false },
            { id: 3, roomName: "Спальня", deviceCount: 2, image: image_br, isDisplay: false },
            { id: 4, roomName: "Детская", deviceCount: 1, image: image_lr, isDisplay: false },
        ],
        roomListAdv: [
            { id: 1, roomName: "Гостиная", isDisplay: true },
            { id: 2, roomName: "Кухня", isDisplay: true },
            { id: 3, roomName: "Спальня", isDisplay: true },
            { id: 4, roomName: "Детская", isDisplay: true },
        ]
    }
},
components: {
    Menu,
    Footer,
},
methods: {
    SetDispay(id) {
        switch (id - 1) {
            case 0:
                this.roomList[0].isDisplay = false
                this.roomList[1].isDisplay = true
                this.roomList[2].isDisplay = true
                this.roomList[3].isDisplay = true
                this.roomListAdv[0].isDisplay = false
                this.roomListAdv[1].isDisplay = true
                this.roomListAdv[2].isDisplay = true
                this.roomListAdv[3].isDisplay = true
                break
            case 1:
                this.roomList[0].isDisplay = true
                this.roomList[1].isDisplay = false
                this.roomList[2].isDisplay = true
                this.roomList[3].isDisplay = true
                this.roomListAdv[0].isDisplay = true
                this.roomListAdv[1].isDisplay = false
                this.roomListAdv[2].isDisplay = true
                this.roomListAdv[3].isDisplay = true
                break
            case 2:
                this.roomList[0].isDisplay = true
                this.roomList[1].isDisplay = true
                this.roomList[2].isDisplay = false
                this.roomList[3].isDisplay = true
                this.roomListAdv[0].isDisplay = true
                this.roomListAdv[1].isDisplay = true
                this.roomListAdv[2].isDisplay = false
                this.roomListAdv[3].isDisplay = true
                break
            case 3:
                this.roomList[0].isDisplay = true
                this.roomList[1].isDisplay = true
                this.roomList[2].isDisplay = true
                this.roomList[3].isDisplay = false
                this.roomListAdv[0].isDisplay = true
                this.roomListAdv[1].isDisplay = true
                this.roomListAdv[2].isDisplay = true
                this.roomListAdv[3].isDisplay = false
                break
        }
    },
    SetBack() {
        this.roomList[0].isDisplay = false
        this.roomList[1].isDisplay = false
        this.roomList[2].isDisplay = false
        this.roomList[3].isDisplay = false
        this.roomListAdv[0].isDisplay = true
        this.roomListAdv[1].isDisplay = true
        this.roomListAdv[2].isDisplay = true
        this.roomListAdv[3].isDisplay = true
    }
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
border-radius: 10px;
padding: 20px;
}

.app-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.room {
    width: 300px;
    height: 300px;
    background-color: #373937;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px 0 10px;
    margin-bottom: 20px;
    padding: 20px;
}

.roomAdv {
    width: 600px;
    height: 500px;
    background-color: #373937;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px 0 10px;
    margin-bottom: 20px;
    padding: 20px;
}

.room img {
    width: 70%;
}

.isDisplay {
    display: none;
}
</style>