<template>
    <div class="header-bar">
        <v-card v-show="thumbUrl=='thumb/厂区全景.jpg'">
            <v-card-text class="title scroll-text" >
                凤香酒核心产区——陕西凤翔·柳林镇
            </v-card-text>
            <v-card-text class="title" v-bind:style="{ fontFamily: fontFamily }">
                柳林酒业集团
            </v-card-text>
        </v-card>
    </div>
    <v-overlay v-model="overlay" location-strategy="connected" scroll-strategy="block">
        <v-card class="pic">
            <v-carousel :show-arrows="false" height="450px" style="z-index: 999;">
                <v-carousel-item src="http://rxb4dwevt.hb-bkt.clouddn.com/%E6%9B%B2%E6%88%BF/%E6%9B%B2%E6%88%BF1.jpg"
                    cover></v-carousel-item>
                <v-carousel-item src="http://rxb4dwevt.hb-bkt.clouddn.com/%E6%9B%B2%E6%88%BF/%E6%9B%B2%E6%88%BF2.jpg"
                    cover></v-carousel-item>
                <v-carousel-item src="http://rxb4dwevt.hb-bkt.clouddn.com/%E6%9B%B2%E6%88%BF/%E6%9B%B2%E6%88%BF3.jpg"
                    cover></v-carousel-item>
                <v-carousel-item src="http://rxb4dwevt.hb-bkt.clouddn.com/%E6%9B%B2%E6%88%BF/%E6%9B%B2%E6%88%BF4.jpg"
                    cover></v-carousel-item>
                <v-carousel-item src="http://rxb4dwevt.hb-bkt.clouddn.com/%E6%9B%B2%E6%88%BF/%E6%9B%B2%E6%88%BF5.jpg"
                    cover></v-carousel-item>
            </v-carousel>
        </v-card>
    </v-overlay>
</template>

<script setup >
import { storeToRefs } from 'pinia'
import { useCounterStore } from "../store/index"
// import { ref } from 'vue';

const store = useCounterStore()
const { overlay ,thumbUrl } = storeToRefs(store)

// const fontFamily = ref("AlimamaDaoLiTi-Regular")
// function switchFront() {
//     if (fontFamily.value == "AlimamaDaoLiTi-Regular") {
//         fontFamily.value = "Alimama_DongFangDaKai_Regular"

//     } else {
//         fontFamily.value = "AlimamaDaoLiTi-Regular"
//     }
// }

</script>

<style scoped>
.header-bar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    top: 5vh;
    width: 80vw;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
}

.v-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 50%;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background: none;

}

.v-card {
    background: none;
    width: 80vw;
    box-shadow: none;
    
}

.pic {
    position: relative;
    top: 5vh;
    background: none;
    width: 80vw;
}


.title {
    font-size: 2em !important;
    text-align: center;
    font-family: 'Alimama_DongFangDaKai_Regular';
    color: aliceblue;
    white-space: nowrap;
}

.scroll-text {
    animation: scroll 15s linear infinite;

}


@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>