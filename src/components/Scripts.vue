<template>
    <div class="app">
        <Menu></Menu>
        <div class="app1">
            <div class="app-inner">
                <div class="script" v-for="script in scriptList" :key="script.id" :class="{'isDisplay': script.isDisplay}" @click="ShowMore(script.id)">
                    <div> - {{ script.scriptName }}</div>
                    <div>{{ script.show }}</div>
                </div>
                <div class="scriptAdv" v-for="scriptadv in scriptListAdv" :key="scriptadv.id" :class="{'isDisplay': scriptadv.isDisplay}" @click="ShowMore(scriptadv.id)">
                    <div> - {{ scriptadv.scriptName }}</div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Menu from './Menu.vue'
import Footer from './Footer.vue'

export default {
    name: 'ScriptsComp',
    data() {
        return {
            isOn: false,
            scriptList: [
                { id: 1, scriptName: "Уборка", isDisplay: false, show: ">" },
                { id: 2, scriptName: "Включить свет", isDisplay: false, show: ">" },
                { id: 3, scriptName: "Жарко", isDisplay: false, show: ">" },
                { id: 4, scriptName: "ТВ", isDisplay: false, show: ">" },
            ],
            scriptListAdv: [
                { id: 1, scriptName: "ЕСЛИ - Время = 18:00 => ТО - Включить Робот-пылесос", isDisplay: true },
                { id: 2, scriptName: "ЕСЛИ - Датчик движения = ON => ТО - Включить Лампа", isDisplay: true },
                { id: 3, scriptName: "ЕСЛИ - Температура >= 26 => ТО - Включить Кондиционер", isDisplay: true },
                { id: 4, scriptName: "ЕСЛИ - Команда = 'Включить телевизор' => ТО - Включить Телевизор", isDisplay: true },
            ],
        }
    },
    components: {
        Menu,
        Footer,
    },
    methods: {
        ShowMore(id) {
            if (this.scriptList[id - 1].show == ">") {
                this.scriptList[0].isDisplay = true
                this.scriptList[1].isDisplay = true
                this.scriptList[2].isDisplay = true
                this.scriptList[3].isDisplay = true
                this.scriptList[id - 1].isDisplay = false
                this.scriptList[id - 1].show = "^"
                this.scriptListAdv[id - 1].isDisplay = false
                this.isOn = true
            } else {
                this.scriptList[0].isDisplay = false
                this.scriptList[1].isDisplay = false
                this.scriptList[2].isDisplay = false
                this.scriptList[3].isDisplay = false
                this.scriptList[id - 1].show = ">"
                this.scriptListAdv[id - 1].isDisplay = true
                this.isOn = false
            }
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
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
}

.script {
    width: 50vw;
    height: 50px;
    color: #ffffff;
    font-size: 20px;
    background-color: #373937;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 0 30px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.scriptAdv {
    width: 50vw;
    height: 200px;
    color: #ffffff;
    background-color: #373937;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
}

.isDisplay {
    display: none;
}
</style>