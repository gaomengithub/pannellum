<template>
    <div class="bar">
        <div ref="memu" class="memu">
            <van-button v-for="item in memuName" :key="item" type="primary">{{ item }}</van-button>
        </div>
        <div class="child">
            <van-image v-for="item in thumbUrls" :src="item"></van-image>
        </div>
        <!-- 在这里添加菜单栏的内容 -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const memuName = ["鸟瞰航拍", "办公楼", "文化馆", "制曲室", "制酒车间", "自动化制酒车间", "酒海", "包装车间", "酒窖"]
const thumbUrls = [
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"

]

</script>
<style scoped>
.bar {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10vh;
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
    height: 10vh;
    border-radius: 15px;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
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
    /* 不换行 */
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
}
.van-image{
    min-width: 20vw;
}
</style>