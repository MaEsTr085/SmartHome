<template>
    <Menu></Menu>
    <div class="app">
        <div class="app-inner">
            <div class="device" v-for="device in deviceList" :key="device.id">
                <div id="div-inner1"><img :src="device.image" alt=""></div>
                <div id="div-inner2">
                <button class="button" :class="{'isWork': device.isWork}" @click="ButtonToggle(device.id - 1)">{{ device.status }}</button>
                <p>{{ device.deviceName }}</p>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import image_rv from "../assets/robot-vacuum.png"
import image_rva from "../assets/robot-vacuumactive.png"
import image_lb from "../assets/lightbulb.png"
import image_lba from "../assets/lightbulbactive.png"
import image_ac from "../assets/air-conditioner.png"
import image_aca from "../assets/air-conditioneractive.png"
import image_tv from "../assets/television.png"
import image_tva from "../assets/televisionactive.png"

import Menu from './Menu.vue'
import Footer from './Footer.vue'

export default {
    name: "MainDevices",
    data() {
        return {
        deviceList: [
            { id: 1, deviceName: "Робот-пылесос", image: image_rv, isWork: false, status: "Выкл" },
            { id: 2, deviceName: "Лампочка", image: image_lb, isWork: false, status: "Выкл" },
            { id: 3, deviceName: "Кондиционер", image: image_ac, isWork: false, status: "Выкл" },
            { id: 4, deviceName: "Телевизор", image: image_tv, isWork: false, status: "Выкл" },
        ]
        };
    },
    components: {
        Menu,
        Footer,
    },
    methods: {
        ButtonToggle(id) {
            if (this.deviceList[id].isWork) {
                this.deviceList[id].isWork = false
                this.deviceList[id].status = 'Выкл'
                if (this.deviceList[id].id == 2) {
                    this.deviceList[1].image = image_lb
                } else if (this.deviceList[id].id == 1) {
                    this.deviceList[0].image = image_rv
                } else if (this.deviceList[id].id == 3) {
                    this.deviceList[2].image = image_ac
                } else if (this.deviceList[id].id == 4) {
                    this.deviceList[3].image = image_tv
                }
            }
            else {
                this.deviceList[id].isWork = true
                this.deviceList[id].status = "Вкл"
                if (this.deviceList[id].id == 2) {
                    this.deviceList[1].image = image_lba
                } else if (this.deviceList[id].id == 1) {
                    this.deviceList[0].image = image_rva
                } else if (this.deviceList[id].id == 3) {
                    this.deviceList[2].image = image_aca
                } else if (this.deviceList[id].id == 4) {
                    this.deviceList[3].image = image_tva
                }
            }
        }
    }
};
</script>
<!--height 500px-->
<style scoped>

.app {
    max-height: 70vh; 
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

.device {
    width: 200px;
    height: 150px;
    background-color: #373937;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px 0 10px;
    margin-bottom: 20px;
}

#div-inner2 {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
}

.device img {
    width: 80%;
}

.button {
    color: #ffffff;
    width: 60px;
    height: 30px;
    border-radius: 6px;
    background-color: #e71010;
    margin-top: 10px;
}

#div-inner2 p {
    margin-bottom: 10px;
}

.isWork {
    background-color: #37a70b;
}
</style>
