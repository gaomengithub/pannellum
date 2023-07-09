<template>
    <div class="right-nav">
        <v-btn  variant="text" icon="mdi-music-circle" color="grey-lighten-5"></v-btn>
    </div>
    <div class="bar">
        <v-sheet class="mx-auto">
            <v-slide-group show-arrows>
                <v-slide-group-item v-for="(_, key) in imageUrls" :key="key">
                    <v-btn class="ma-2" density="comfortable" rounded :color="navTitle === key ? 'primary' : undefined" @click="thumbNav(key)">
                        {{ key }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <div class="img-nav">
            <v-slide-group  style="width: 100%;" show-arrows>
                <v-slide-group-item v-for="(item, idx) in thumbUrls[thumbUrlsNav]" >
                    <div class="cell" :style="{backgroundImage: `url(${item})` }" @click="callSwitchScene(item)" :class="{ active: thumbUrl === item }" >
                        <!-- <img :src="item" :class="{ active: thumbUrl === item }" @click="callSwitchScene(item)" /> -->
                        <div style="background-color: black; opacity: 0.8;" >
                            <div class="scroll-text" :class="{ scroll: thumbUrl === item }" >{{ item.replace(/thumb\/|.jpg/g, '') }}</div>
                        </div>
                    </div>
                </v-slide-group-item>
            </v-slide-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const navTitle = ref("鸟瞰航拍")
const thumbUrl = ref("thumb/厂区全景.jpg")

function thumbNav(key) {
    thumbUrlsNav.value = key
    navTitle.value = key;
}

const emits = defineEmits(['eventFromChild'])
let callSwitchScene = (item) => {
    thumbUrl.value = item
    let res = item.replace(/thumb\/|.jpg/g, '')
    emits('eventFromChild', res);
}



import imageUrls from "../global"
const thumbUrlsNav = ref("鸟瞰航拍")
const thumbUrls = {
    "鸟瞰航拍": [
        "thumb/厂区全景.jpg",
        "thumb/露天金属酒库.jpg",
        "thumb/金属酒库.jpg",
        "thumb/红粮车间和稻壳车间.jpg",
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
    bottom: 5vh;
    width: 80vw;
    min-height: 18vh;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}

.right-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 2vw;
    right: 2vw;
}

.mx-auto {
    background: none;
    max-width: 80vw;
}

.v-btn--icon.v-btn--size-default {
    --v-btn-size: 1.5rem;
}

:deep(.v-slide-group__prev) {
    min-width: 1vw !important;
}

:deep(.v-slide-group__next) {
    min-width: 1vw !important;
}

.bar .img-nav {
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: #000000;
    border-radius: 10px;
    opacity: 0.85;
    height: 12vh;
    padding: 8px;
    overflow: auto;
    overflow-y: hidden;
}

.bar .img-nav .cell {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin-right: 2vw;
    margin-left: 2vw;
    overflow: hidden;
    width: 8vh;
    height: 8vh;
    background-size: contain;
    border-radius: 10px;
    border-width: 3px;
    border-style: solid;
    border-color: #fff;

}

.scroll-text {
    position: relative;
    bottom: 0;
    width: 8vh;
    font-size: 0.75em;
    color: #fff;
    text-align: center;
    /* overflow: hidden; */
    white-space: nowrap;
    padding-right: 2px;
    padding-left: 2px;

}

.scroll {
    animation: scroll 5s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.active {
    border-color: #5085FB !important;
    z-index: 1;
}
</style>

