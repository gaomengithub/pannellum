<template>
    <v-overlay v-model="show" location-strategy="connected" scroll-strategy="block">
        <v-card-text>
            <v-img class="tip" :width="300" src="/tip/intipsPC.gif" v-if="type == 'PC'">
            </v-img>
            <v-img class="tip" :width="300" src="/tip/intipsAPP.gif" v-if="type == 'Mobile device'">
            </v-img>
        </v-card-text>
    </v-overlay>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const show = ref(true)
const type = ref("Mobile device")
onMounted(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        type.value = "Mobile device"
    } else {
        type.value = "PC"
    }
    setTimeout(() => {
        show.value = false
    }, 3000)
})
</script>
<style scoped>
.v-overlay {
    align-items: center;
    justify-content: center;
}
</style>