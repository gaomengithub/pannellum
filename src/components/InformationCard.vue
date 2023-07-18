<template>
    <div class="header-bar">
        <v-card v-show="thumbUrl == prefix + '/thumb/v1/厂区全景.jpg'">
            <v-card-text class="title scroll-text">
                凤香酒核心产区——陕西凤翔·柳林镇
            </v-card-text>
            <v-card-text class="title">
                柳林酒业集团
            </v-card-text>
        </v-card>
    </div>
    <v-overlay v-model="overlay" location-strategy="connected" scroll-strategy="block">
        <v-card class="pic">
            <v-carousel :show-arrows="false" height="450px">
                <v-carousel-item v-for="item in picUrls" :key="item" :src=item
                    cover></v-carousel-item>
            </v-carousel>
        </v-card>
    </v-overlay>
    <v-overlay v-model="endPointOverlay" location-strategy="connected" scroll-strategy="block">
        <v-card class="pic-end">
            <v-img :src="endPointPicUrl" height="85vh"></v-img>
        </v-card>
    </v-overlay>
</template>

<script setup >
import { storeToRefs } from 'pinia'
import prefix from './global';
import { useCounterStore } from "../store/index"

const picUrls = [
    prefix + "/%E6%9B%B2%E6%88%BF/v1/%E6%9B%B2%E6%88%BF1.jpg",
    prefix + "/%E6%9B%B2%E6%88%BF/v1/%E6%9B%B2%E6%88%BF2.jpg",
    prefix + "/%E6%9B%B2%E6%88%BF/v1/%E6%9B%B2%E6%88%BF3.jpg",
    prefix + "/%E6%9B%B2%E6%88%BF/v1/%E6%9B%B2%E6%88%BF4.jpg",
    prefix + "/%E6%9B%B2%E6%88%BF/v1/%E6%9B%B2%E6%88%BF5.jpg",
]

const endPointPicUrl = prefix + "/%E6%8E%A8%E5%B9%BF%E5%A4%A7%E4%BD%BF.jpg"
// import { ref } from 'vue';

const store = useCounterStore()
const { overlay, thumbUrl ,endPointOverlay } = storeToRefs(store)

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

.pic-end {
    position: relative;
    top: 5vh;
    background: none;
    width: 300px;
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