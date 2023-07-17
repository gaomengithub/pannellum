<template>
    <div class="right-nav">
        <v-btn variant="text" :icon="isPlaying ? 'mdi-music' : 'mdi-music-off'" color="grey-lighten-5" density="compact"
            size="auto" @click="playController"></v-btn>
    </div>
    <div class="bar">
        <v-sheet class="mx-auto">
            <v-slide-group show-arrows next-icon="mdi-arrow-right-circle" prev-icon="mdi-arrow-left-circle">
                <v-slide-group-item v-for="item in navTitle" :key="item">
                    <v-btn class="ma-2" density="comfortable" rounded :color="navCurrTitle === item ? 'primary' : undefined"
                        @click="titleNav(item)">
                        {{ item }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <div class="img-nav">
            <v-slide-group style="width: 100%;" show-arrows :key="forceKey">
                <v-slide-group-item v-for="(item, idx) in store.thumbUrls[navCurrTitle]" :key="idx">
                    <div class="cell" :style="{ backgroundImage: `url(${item})` }" @click="callSwitchScene(item)"
                        :class="{ active: thumbUrl === item }">
                        <v-icon class="over" icon="mdi-check-circle-outline"
                            :style="{ opacity: used.includes(item) ? 1 : 0 }" />
                        <!-- <img :src="item" :class="{ active: thumbUrl === item }" @click="callSwitchScene(item)" /> -->
                        <div style="background-color: black; opacity: 0.8;">
                            <div class="scroll-text" :class="{ scroll: thumbUrl === item }">{{
                                item.replace(/.*thumb\/v\d\/|.jpg/g,
                                    '') }}</div>
                        </div>

                    </div>
                </v-slide-group-item>
            </v-slide-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useCounterStore } from "../store/index"
import prefix from './global';
const store = useCounterStore()
const { thumbUrl, navCurrTitle, used } = storeToRefs(store)
const forceKey = ref(0)
function forceRerender() {
    forceKey.value += 1
}
const navTitle = ["鸟瞰航拍", "办公楼", "文化馆", "制曲室", "制酒车间", "自动化制酒车间", "酒海", "包装车间", "酒窖"]

// const navCurrTitle = ref("鸟瞰航拍")
// const thumbUrl = ref("thumb/厂区全景.jpg")


function titleNav(key) {
    forceRerender()
    navCurrTitle.value = key;
}

const emits = defineEmits(['eventFromChild'])
let callSwitchScene = (item) => {
    used.value.push(item)
    emits('eventFromChild', item);
}

const isPlaying = ref(false)
const audio = new Audio(prefix + "/muisc/%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90.mp3");
audio.loop = true
audio.currentTime = 2
audio.preload = "metadata"

function playController() {
    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
        audio.play()
    } else {
        audio.pause()
    }
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
    min-width: 25px !important;
}

:deep(.v-slide-group__next) {
    min-width: 25px !important;
}

.bar .img-nav {
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.85);
    border-radius: 10px;
    /* opacity: 0.85; */
    height: 15vh;
    padding: 8px;
    overflow: auto;
    overflow-y: hidden;
}

.bar .img-nav .cell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 2vw;
    margin-left: 2vw;
    overflow: hidden;
    width: 10vh;
    aspect-ratio: 1 / 1;
    /* height: 8vh; */
    background-size: contain;
    border-radius: 10px;
    border-width: 3px;
    border-style: solid;
    border-color: #fff;

}

.over {
    position: relative;
    left: 25%;
    filter: invert(1);
    color: #000000 !important;
    opacity: 0;
}

.scroll-text {
    position: relative;
    bottom: 0;
    width: 10vh;
    font-size: 0.85em;
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
