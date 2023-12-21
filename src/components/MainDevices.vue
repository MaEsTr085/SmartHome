<template>
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
</template>

<script>
import image_rv from "../assets/robot-vacuum.png"
import image_lb from "../assets/lightbulb.png"
import image_ac from "../assets/air-conditioner.png"
import image_st from "../assets/streaming-tv-app.png"

export default {
name: "DevicesComp",
data() {
    return {
    deviceList: [
        { id: 1, deviceName: "Робот-пылесос", image: image_rv, isWork: false, status: "Выкл" },
        { id: 2, deviceName: "Лампочка", image: image_lb, isWork: false, status: "Выкл" },
        { id: 3, deviceName: "Кондиционер", image: image_ac, isWork: false, status: "Выкл" },
        { id: 4, deviceName: "Телевизор", image: image_st, isWork: false, status: "Выкл" },
    ]
    };
},
methods: {
    ButtonToggle(id) {
    if (this.deviceList[id].isWork) {
        this.deviceList[id].isWork = false;
        this.deviceList[id].status = 'Выкл';
    }
    else {
        this.deviceList[id].isWork = true;
        this.deviceList[id].status = "Вкл";
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
