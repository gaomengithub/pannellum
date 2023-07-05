<template>
    <div class="bar">
        <div class="memu">
            <van-button v-for="(value, key) in imageUrls" :key="key" type="primary" @click="switchThumbNav(key)" >{{ key }}</van-button>
        </div>
        <div class="child">
            <van-image  radius="15px" v-for="item in thumbUrls[thumbUrlsNav]" :src="item"></van-image>
        </div>
        <!-- 在这里添加菜单栏的内容 -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

function switchThumbNav(key){
    thumbUrlsNav.value = key
}

import imageUrls from "../global"
const thumbUrlsNav = ref("鸟瞰航拍")
const thumbUrls = {
    "鸟瞰航拍": [
        "thumb/鸟瞰全景.jpg",
        "thumb/露天酒库.jpg",
        "thumb/航拍3.jpg",
        "thumb/航拍4.jpg",
        "thumb/金属酒库.jpg",
        "thumb/红粮车间.jpg",
    ], "办公楼": [
        "thumb/大门.jpg",
        "thumb/办公楼大门.jpg",
        "thumb/大厅.jpg",

    ], "文化馆": [
        "thumb/前言.jpg",
        "thumb/集团简介.jpg",
        "thumb/五年.jpg",
        "thumb/八次.jpg",
        "thumb/古法.jpg",
        "thumb/室内投影.jpg",
        "thumb/总体规划.jpg",
        "thumb/党建.jpg",
    ], "制曲室": [
        "thumb/培菌室.jpg",
    ], "制酒车间": [
        "thumb/制酒车间1.jpg",
        "thumb/制酒车间2.jpg",
        "thumb/制酒车间3.jpg",
        "thumb/制酒车间4.jpg",
    ], "自动化制酒车间": [
        "thumb/自动制酒外景.jpg",
        "thumb/自动制酒大厅.jpg",
        "thumb/自动制酒1.jpg",
        "thumb/自动制酒2.jpg",
        "thumb/自动制酒3.jpg",
        "thumb/自动制酒4.jpg",
        "thumb/自动制酒5.jpg",
    ], "酒海": [
        "thumb/酒海1.jpg",
        "thumb/酒海2.jpg",
        "thumb/酒海3.jpg",
        "thumb/酒海4.jpg",
        "thumb/酒海5.jpg",
    ], "包装车间": [
        "thumb/包装.jpg",
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
    bottom: 5vh;
    width: 80vw;
    height: 20vh;
    opacity: 0.8;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    overflow: hidden;
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
    border-radius: 15px;
    padding: 5px;
    flex-direction: row;
    overflow: auto;
}

.van-button {
    max-height: 3vh;
    height: 4vh !important;
    min-width: 20vw;
    border-radius: 10px;
    white-space: nowrap;
    margin-right: 10px;
    font-size: 0.75rem !important;
    font-weight: 300 !important;
    /* 不换行 */
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
}

.van-image {
    min-width: 18vw;
    max-width: 18vw;
    margin-right: 1vw;
}
</style>