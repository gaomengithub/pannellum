<template>
    <div id="panorama"></div>
    <Memu @eventFromChild="switchScene" />
    <Information />
</template>

<script setup>
import { onMounted } from 'vue';
import Memu from './Memu.vue';
import Information from './Information.vue';
import { storeToRefs } from 'pinia'
import { useCounterStore } from "../store/index"
const store = useCounterStore()
const { overlay , thumbUrl ,navCurrTitle} = storeToRefs(store)

let viewer
onMounted(() => {
    viewer = pannellum.viewer("panorama", {
        "default": {
            "firstScene": "厂区全景",
            // "author": "Matthew Petroff",
            "sceneFadeDuration": 1000,
        },
        "scenes": {
            "厂区全景": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8E%82%E5%8C%BA%E5%85%A8%E6%99%AF.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8E%82%E5%8C%BA%E5%85%A8%E6%99%AF.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": -107,
                "pitch": -27,
                "hotSpots": [
                    {
                        "pitch": -37,
                        "yaw": -106,
                        "type": "scene",
                        "text": "办公楼",
                        "sceneId": "办公楼前",
                        "div": {}
                    },
                    {
                        "pitch": -22,
                        "yaw": -86,
                        "type": "scene",
                        "text": "文化馆",
                        "sceneId": "前言",
                        "div": {}
                    },
                    {
                        "pitch": -10,
                        "yaw": -112,
                        "type": "scene",
                        "text": "金属酒库",
                        "sceneId": "金属酒库",
                        "div": {}
                    },
                    {
                        "pitch": -6,
                        "yaw": -133,
                        "type": "scene",
                        "text": "红粮车间和稻壳车间",
                        "sceneId": "红粮车间和稻壳车间",
                        "div": {}
                    },
                    {
                        "pitch": -7,
                        "yaw": -98,
                        "type": "scene",
                        "text": "露天金属酒库",
                        "sceneId": "露天金属酒库",
                        "div": {}
                    },
                    {
                        "pitch": -17,
                        "yaw": -141,
                        "type": "scene",
                        "text": "自动化制酒车间",
                        "sceneId": "自动化制酒车间1",
                        "div": {}
                    }
                ]
            },
            "露天金属酒库": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%9C%B2%E5%A4%A9%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%9C%B2%E5%A4%A9%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": -22,
                "pitch": -46,
                "hotSpots": [
                    {
                        "pitch": -3,
                        "yaw": 158,
                        "type": "scene",
                        "text": "红粮车间和稻壳车间",
                        "sceneId": "红粮车间和稻壳车间"
                    },
                    {
                        "pitch": -3,
                        "yaw": 75,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景"
                    }
                ]
            },
            "红粮车间和稻壳车间": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E7%BA%A2%E7%B2%AE%E8%BD%A6%E9%97%B4%E5%92%8C%E7%A8%BB%E5%A3%B3%E8%BD%A6%E9%97%B4.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E7%BA%A2%E7%B2%AE%E8%BD%A6%E9%97%B4%E5%92%8C%E7%A8%BB%E5%A3%B3%E8%BD%A6%E9%97%B4.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 50,
                "pitch": -40,
                "hotSpots": [
                    {
                        "pitch": -8,
                        "yaw": -98,
                        "type": "scene",
                        "text": "露天金属酒库",
                        "sceneId": "露天金属酒库"
                    },
                    {
                        "pitch": -3,
                        "yaw": -38,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景"
                    }
                ]
            },
            "金属酒库": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": -87,
                "pitch": -22
            },
            "制曲厂区1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": -112,
                "pitch": -40
            },
            "制曲厂区2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA2.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA2.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": -53,
                "pitch": -40
            },
            "厂区大门": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8E%82%E5%8C%BA%E5%A4%A7%E9%97%A8.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8E%82%E5%8C%BA%E5%A4%A7%E9%97%A8.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 10,
                        "yaw": 4,
                        "type": "scene",
                        "text": "办公楼前",
                        "sceneId": "办公楼前"
                    }
                ]
            },
            "办公楼前": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8A%9E%E5%85%AC%E6%A5%BC%E5%89%8D.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8A%9E%E5%85%AC%E6%A5%BC%E5%89%8D.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 5,
                        "yaw": 0,
                        "type": "scene",
                        "text": "办公楼大厅",
                        "sceneId": "办公楼大厅"
                    }
                ]
            },
            "办公楼大厅": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8A%9E%E5%85%AC%E6%A5%BC%E5%A4%A7%E5%8E%85.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8A%9E%E5%85%AC%E6%A5%BC%E5%A4%A7%E5%8E%85.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "前言": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%89%8D%E8%A8%80.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%89%8D%E8%A8%80.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": 120,
                        "type": "scene",
                        "text": "简介",
                        "sceneId": "简介"
                    }
                ]
            },
            "简介": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E7%AE%80%E4%BB%8B.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E7%AE%80%E4%BB%8B.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw": 185,
                        "type": "scene",
                        "text": "19985工艺1",
                        "sceneId": "19985工艺1"
                    },
                    {
                        "pitch": -25,
                        "yaw": -140,
                        "type": "scene",
                        "text": "历史脉络",
                        "sceneId": "历史脉络"
                    }
                ]
            },
            "历史脉络": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8E%86%E5%8F%B2%E8%84%89%E7%BB%9C.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8E%86%E5%8F%B2%E8%84%89%E7%BB%9C.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "19985工艺1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/19958%E5%B7%A5%E8%89%BA1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/19958%E5%B7%A5%E8%89%BA1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -20,
                        "type": "scene",
                        "text": "古法酿造工具",
                        "sceneId": "古法酿造工具"
                    }
                ]
            },
            "19985工艺2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/19958%E5%B7%A5%E8%89%BA2.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/19958%E5%B7%A5%E8%89%BA2.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "19985工艺3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/19958%E5%B7%A5%E8%89%BA3.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/19958%E5%B7%A5%E8%89%BA3.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "古法酿造工具": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8F%A4%E6%B3%95%E9%85%BF%E9%80%A0%E5%B7%A5%E5%85%B7.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8F%A4%E6%B3%95%E9%85%BF%E9%80%A0%E5%B7%A5%E5%85%B7.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 180,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -110,
                        "type": "scene",
                        "text": "酒海",
                        "sceneId": "酒海"
                    }
                ]
            },
            "酒海": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B7.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B7.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -65,
                        "type": "scene",
                        "text": "企业产品",
                        "sceneId": "企业产品"
                    }
                ]
            },
            "书法区": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E4%B9%A6%E6%B3%95%E5%8C%BA.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E4%B9%A6%E6%B3%95%E5%8C%BA.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "企业产品": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E4%BC%81%E4%B8%9A%E4%BA%A7%E5%93%81.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E4%BC%81%E4%B8%9A%E4%BA%A7%E5%93%81.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": 180,
                        "type": "scene",
                        "text": "前景展望",
                        "sceneId": "前景展望"
                    }
                ]
            },
            "前景展望": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%89%8D%E6%99%AF%E5%B1%95%E6%9C%9B.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%89%8D%E6%99%AF%E5%B1%95%E6%9C%9B.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "弧形投影": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%BC%A7%E5%BD%A2%E6%8A%95%E5%BD%B1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%BC%A7%E5%BD%A2%E6%8A%95%E5%BD%B1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "党建": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%85%9A%E5%BB%BA.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%85%9A%E5%BB%BA.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "培菌室": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%9F%B9%E8%8F%8C%E5%AE%A4.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%9F%B9%E8%8F%8C%E5%AE%A4.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw": 90,
                        "cssClass": "custom-hotspot",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": overlay,
                    }
                ]
            },
            "制酒车间1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 0,
                        "yaw": 0,
                        "type": "scene",
                        "text": "制酒车间2",
                        "sceneId": "制酒车间2"
                    }
                ]
            },
            "制酒车间2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "制酒车间3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "制酒车间4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间5": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B45.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B45.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间6": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B46.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B46.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间7": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B47.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B47.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "自动化制酒车间8": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B48.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B48.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒海1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B71.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B71.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒海2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B72.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B72.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒海3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B73.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B73.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒海4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B74.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B74.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒海5": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B75.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B75.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "包装车间": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8C%85%E8%A3%85%E8%BD%A6%E9%97%B4.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8C%85%E8%A3%85%E8%BD%A6%E9%97%B4.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "仓库": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E4%BB%93%E5%BA%93.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E4%BB%93%E5%BA%93.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            },
            "酒窖": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E7%AA%96.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E7%AA%96.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 60,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0
            }
        }
    })
    viewer.on("scenechange",function(){
        navCurrTitle.value = findCategory("thumb/" + viewer.getScene() + ".jpg")
        thumbUrl.value =  "thumb/" + viewer.getScene() + ".jpg"

    })
})

function findCategory(val) {
  // 遍历thumbUrls的键
  for (let category of Object.keys(store.thumbUrls)) {
    // 在当前分类的图片中查找是否有匹配的URL
    if (store.thumbUrls[category].find((value) => value === val)) {
      // 如果找到了匹配的URL，返回当前的分类
      return category;
    }
  }
  // 如果没有找到匹配的URL，返回null
  return null;
}


function switchScene(item) {
    thumbUrl.value = item
    const res = item.replace(/thumb\/|.jpg/g, '')
    viewer.loadScene(res)
}


function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    hotSpotDiv.addEventListener('click', function handleClick() {
        args.value = true
    });
}



defineExpose({ switchScene })





</script>
<style>
#panorama {
    width: 100vw;
    height: 100vh;
}

.custom-hotspot {
    height: 40px;
    width: 40px;
    background-image: url("/icon/information-slab-circle-outline.svg");
    background-repeat: no-repeat;
    /* 防止图标重复 */
    background-size: contain;
    /* 让图标在盒子里面适当的缩放 */
    filter: invert(1);
    /* Applies the invert filter */
}
</style>

