<template>
    <div id="panorama"></div>
    <Memu @eventFromChild="switchScene" />
</template>

<script setup>
import { onMounted } from 'vue';
import imageUrls from "../global"
import Memu from './Memu.vue';
let viewer
onMounted(() => {
    viewer = pannellum.viewer("panorama", {
        "default": {
            "firstScene": "厂区全景",
            // "author": "Matthew Petroff",
            "sceneFadeDuration": 1000,
            // "orientationOnByDefault": true,
        },
        // "orientationOnByDefault": true,
        "scenes": generateSceneInfo()
    })
    // setInterval(()=>{
    //     console.log(viewer.getPitch())
    // },4000)
})

function switchScene(sceneId) {
    viewer.loadScene(sceneId)
}


defineExpose({ switchScene })

function generateSceneInfo() {
    let scenes = {}
    for (let key in imageUrls) {
        for (let subKey in imageUrls[key]) {
            scenes[subKey] = {
                type: 'equirectangular',
                panorama: imageUrls[key][subKey]["url"].split('.com/')[0] + '.com/' + '8192/' + imageUrls[key][subKey]["url"].split('.com/')[1],
                preview: imageUrls[key][subKey]["url"].split('.com/')[0] + '.com/' + 'cover/' + imageUrls[key][subKey]["url"].split('.com/')[1],
                autoLoad: true,
                showControls: true,
                haov: "360",
                hfov: 60,
                minHfov: 20,
                yaw: imageUrls[key][subKey]["yaw"],
                pitch: imageUrls[key][subKey]["pitch"],
                hotSpots: imageUrls[key][subKey]["hotSpots"]
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

