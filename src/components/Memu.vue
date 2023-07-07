<template>
    <div class="bar">
        <div class="memu">
            <van-button v-for="(value, key) in imageUrls" :key="key" type="primary" @click="switchThumbNav(key)"
                :class="{ active: activeKey === key }">{{ key }}</van-button>
        </div>
        <div class="child">
            <img class="child-img" v-for="(item, idx) in thumbUrls[thumbUrlsNav]" :src="item"
                :class="{ imageActive: activeImageKey === item }" @click="callSwitchScene(item)" />
        </div>
        <!-- 在这里添加菜单栏的内容 -->
    </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue';
const activeKey = ref("鸟瞰航拍")
const activeImageKey = ref("thumb/厂区全景.jpg")

function switchThumbNav(key) {
    thumbUrlsNav.value = key
    activeKey.value = key;
}
let emit = getCurrentInstance().emit
let callSwitchScene = (item) => {
    activeImageKey.value = item
    let res = item.replace(/thumb\/|.jpg/g,'')
    emit('eventFromChild', res);
}



import imageUrls from "../global"
const thumbUrlsNav = ref("鸟瞰航拍")
const thumbUrls = {
    "鸟瞰航拍": [
        "thumb/厂区全景.jpg",
        "thumb/露天金属酒库.jpg",
        "thumb/金属酒库.jpg",
        "thumb/制曲厂区1.jpg",
        "thumb/制曲厂区2.jpg",
    ], "办公楼": [
        "thumb/厂区大门.jpg",
        "thumb/办公楼大厅.jpg",

    ], "文化馆": [
        "thumb/前言.jpg",
        "thumb/简介.jpg",
        "thumb/19985工艺1.jpg",
        "thumb/19985工艺2.jpg",
        "thumb/古法酿造工具.jpg",
        "thumb/书法区.jpg",
        "thumb/弧形投影.jpg",
        "thumb/党建.jpg",
    ], "制曲室": [
        "thumb/培菌室.jpg",
    ], "制酒车间": [
        "thumb/制酒车间1.jpg",
        "thumb/制酒车间2.jpg",
        "thumb/制酒车间3.jpg",
        "thumb/制酒车间4.jpg",
    ], "自动化制酒车间": [
        "thumb/自动化制酒车间1.jpg",
        "thumb/自动化制酒车间2.jpg",
        "thumb/自动化制酒车间3.jpg",
        "thumb/自动化制酒车间4.jpg",
        "thumb/自动化制酒车间5.jpg",
        "thumb/自动化制酒车间6.jpg",
        "thumb/自动化制酒车间7.jpg",
        "thumb/自动化制酒车间8.jpg",
    ], "酒海": [
        "thumb/酒海1.jpg",
        "thumb/酒海2.jpg",
        "thumb/酒海3.jpg",
        "thumb/酒海4.jpg",
        "thumb/酒海5.jpg",
    ], "包装车间": [
        "thumb/包装车间.jpg",
        "thumb/仓库.jpg",
    ], "酒窖": [
        "thumb/酒窖.jpg",
    ]
}

</script>
<style scoped>
.bar {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 1vh;
    width: 80vw;
    height: 20vh;
    opacity: 0.8;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    /* overflow: hidden; */
}

.bar .memu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5vh;
    overflow: auto;
}



.bar .child {
    display: flex;
    background-color: #000000;
    height: 8vh;
    border-radius: 10px;
    padding: 8px;
    flex-direction: row;
    overflow: auto;
}

.van-button {
    max-height: 3vh;
    height: 4vh !important;
    min-width: 20vw;
    border-radius: 10px;
    border-color: #000000;
    white-space: nowrap;
    margin-right: 10px;
    font-size: 0.75rem !important;
    font-weight: 300 !important;
    background-color: #000000;
    opacity: 0.8;
    /* 不换行 */
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
}

.child-img {
    width: 16vw;
    /* max-width: 16vw; */
    margin-right: 5vw;
    border-radius: 15px;
    border-width: 2px;
    border-style: solid;
    border-color: #fff
}

.active {
    background-color: #5085FB;
    border-color: #5085FB;
}

.imageActive {
    border-color: #5085FB;
    /* border-width: 2px;
    border-style: solid; */
}
</style>

