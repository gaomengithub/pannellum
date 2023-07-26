<template>
    <div class="audio-btn">
        <v-btn variant="text" :icon="isPlaying ? 'mdi-music' : 'mdi-music-off'" color="grey-lighten-5" density="compact"
            size="auto" @click="playController"></v-btn>
    </div>
    <v-overlay v-model="show" location-strategy="connected" scroll-strategy="block" @click="playController()">
        <v-card-text>
            <v-img :width="300" src="/tip/intipsPC.gif" v-if="type == 'PC'">
            </v-img>
            <v-img :width="300" src="/tip/intipsAPP.gif" v-if="type == 'Mobile device'" >
            </v-img>
        </v-card-text>
    </v-overlay>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import prefix from './global';
const show = ref(true)
const type = ref("Mobile device")
onMounted(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        type.value = "Mobile device"
    } else {
        type.value = "PC"
    }
    // setTimeout(() => {
    //     show.value = false
    // }, 3000)
})


const isPlaying = ref(false)
const audio = new Audio(prefix + "/muisc/%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90.mp3");
audio.loop = true
audio.currentTime = 2
audio.preload = "metadata"

function playController() {
    show.value = false

    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
        audio.play()
    } else {
        audio.pause()
    }
}



</script>
<style scoped>
.audio-btn {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 2vw;
    right: 2vw;
    z-index: 1;
}

.v-overlay {
    align-items: center;
    justify-content: center;
}
</style>