<template>
    <div id="panorama"></div>
    <Memu @eventFromChild="switchScene" />
</template>

<script setup>
import { onMounted , watch } from 'vue';
import imageUrls from "../global"
import Memu from './Memu.vue';
let viewer
onMounted(() => {
    viewer = pannellum.viewer("panorama", {
        "default": {
            "firstScene": "厂区全景",
            // "author": "Matthew Petroff",
            "sceneFadeDuration": 1000
        },
        "scenes": makeSceneInfo()
    })
})

function switchScene(sceneId) {
    viewer.loadScene(sceneId)
}

defineExpose({ switchScene })

function makeSceneInfo() {
    let scenes = {}
    for (let key in imageUrls) {
        for (let subKey in imageUrls[key]) {
            scenes[subKey] = {
                type: 'equirectangular',
                panorama: imageUrls[key][subKey].split('.com/')[0] + '.com/' + '8192/' + imageUrls[key][subKey].split('.com/')[1],
                preview:imageUrls[key][subKey].split('.com/')[0] + '.com/' + 'cover/' + imageUrls[key][subKey].split('.com/')[1],
                autoLoad: true,
                showControls: true,
                haov: "360",
                hfov:60,
                minHfov:30,
            }
        }
    }
    return scenes
}


</script>
<style>
#panorama {
    width: 100vw;
    height: 100vh;
}
</style>

