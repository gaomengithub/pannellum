<template>
    <div id="panorama"></div>
    <slot  name="memu"></slot>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let viewer = pannellum.viewer("panorama", {
        type: 'equirectangular',
        panorama: '/images/红粮车间和稻壳车间.jpg',
        autoLoad: true,
        showControls: true,
        haov:"360",
        // autoRotate:"-5",
        // autoRotateInactivityDelay:"5",
        hotSpots: [
            {
                pitch: 14.1,
                yaw: -11.4,
                type: 'scene',
                text: '第一个场景',
                sceneId: 'scene2',
            },
            {
                pitch: -10.8,
                yaw: 222.6,
                type: 'scene',
                text: '第二个场景',
                sceneId: 'scene3',
            },
        ],
    })
})

</script>
<style>
#panorama {
    width: 100vw;
    height: 100vh;
}
</style>

