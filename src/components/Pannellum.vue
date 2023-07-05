<template>
    <van-button @click="switchScene">zhongguoliliang</van-button>
    <div id="panorama"></div>
    <slot name="memu"></slot>
</template>

<script setup>
import { onMounted } from 'vue';
let viewer
onMounted(() => {
    viewer = pannellum.viewer("panorama", {
        "default": {
            "firstScene": "firstScene",
            "author": "Matthew Petroff",
            "sceneFadeDuration": 1000
        },
        "scenes": {
            "firstScene": {
                type: 'equirectangular',
                panorama: '/images/红粮车间和稻壳车间.jpg',
                autoLoad: true,
                showControls: true,
                haov: "360",
                // autoRotate:"-5",
                // autoRotateInactivityDelay:"5",
                // hotSpots: [
                //     {
                //         pitch: 14.1,
                //         yaw: -11.4,
                //         type: 'scene',
                //         text: '鸟瞰全景',
                //         sceneId: '鸟瞰全景',
                //     },
                //     {
                //         pitch: -10.8,
                //         yaw: 222.6,
                //         type: 'scene',
                //         text: '第二个场景',
                //         sceneId: 'scene3',
                //     },
                // ],

            },
            "secondScene": {
                type: 'equirectangular',
                panorama: "http://rxb4dwevt.hb-bkt.clouddn.com/%E5%89%8D%E8%A8%80.jpg",
                autoLoad: true,
                showControls: true,
                haov: "360",
                // autoRotate:"-5",
                // autoRotateInactivityDelay:"5",
                // hotSpots: [
                //     {
                //         pitch: 14.1,
                //         yaw: -11.4,
                //         type: 'scene',
                //         text: '鸟瞰全景',
                //         sceneId: '鸟瞰全景',
                //     },
                //     {
                //         pitch: -10.8,
                //         yaw: 222.6,
                //         type: 'scene',
                //         text: '第二个场景',
                //         sceneId: 'scene3',
                //     },
                // ],

            }

        }


    })
    // viewer.loadScene("firstScence")
})

function switchScene() {
    console.log(viewer.getContainer())
        viewer.loadScene("secondScene")
}
</script>
<style>
#panorama {
    width: 100vw;
    height: 100vh;
}
</style>

