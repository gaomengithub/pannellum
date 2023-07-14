<template>
    <TipCard />
    <div id="panorama"></div>
    <Memu @eventFromChild="switchScene" />
    <Information />
</template>

<script setup>
import { onMounted } from 'vue';
import Memu from './MemuNav.vue';
import Information from './InformationCard.vue';
import { storeToRefs } from 'pinia'
import { useCounterStore } from "../store/index"
import TipCard from './TipCard.vue';
// import * as pannellum from 'pannellum';
const store = useCounterStore()
const { overlay, thumbUrl, navCurrTitle ,used } = storeToRefs(store)

let viewer
onMounted(() => {
    // eslint-disable-next-line no-undef
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
                "hfov": 120,
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
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "办公楼前",
                    },
                    // {
                    //     "pitch": -22,
                    //     "yaw": -86,
                    //     "type": "scene",
                    //     "text": "文化馆",
                    //     "sceneId": "前言",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "文化馆",

                    // },
                    {
                        "pitch": -10,
                        "yaw": -112,
                        "type": "scene",
                        "text": "金属酒库",
                        "sceneId": "金属酒库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "金属酒库",

                    },
                    {
                        "pitch": -6,
                        "yaw": -133,
                        "type": "scene",
                        "text": "红粮车间和稻壳车间",
                        "sceneId": "红粮车间和稻壳车间",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "红粮车间和稻壳车间",

                    },
                    {
                        "pitch": -2,
                        "yaw": -68,
                        "type": "scene",
                        "text": "制曲厂区1",
                        "sceneId": "制曲厂区1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制曲厂区",

                    },
                    {
                        "pitch": -7,
                        "yaw": -98,
                        "type": "scene",
                        "text": "露天金属酒库",
                        "sceneId": "露天金属酒库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "露天金属酒库",

                    },
                    // {
                    //     "pitch": -7,
                    //     "yaw": -108,
                    //     "type": "scene",
                    //     "text": "自动化制酒车间",
                    //     "sceneId": "自动化制酒车间1",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "自动化制酒车间",

                    // }
                ]
            },
            "露天金属酒库": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%9C%B2%E5%A4%A9%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%9C%B2%E5%A4%A9%E9%87%91%E5%B1%9E%E9%85%92%E5%BA%93.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -22,
                "pitch": -46,
                "hotSpots": [
                    {
                        "pitch": -3,
                        "yaw": 158,
                        "type": "scene",
                        "text": "红粮车间和稻壳车间",
                        "sceneId": "红粮车间和稻壳车间",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "红粮车间和稻壳车间",

                    },
                    {
                        "pitch": -3,
                        "yaw": 75,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "厂区全景",
                    },
                    {
                        "pitch": -20,
                        "yaw": 120,
                        "type": "scene",
                        "text": "自动化制酒车间",
                        "sceneId": "自动化制酒车间1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 50,
                "pitch": -40,
                "hotSpots": [
                    {
                        "pitch": -8,
                        "yaw": -98,
                        "type": "scene",
                        "text": "露天金属酒库",
                        "sceneId": "露天金属酒库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "露天金属酒库",
                    },
                    {
                        "pitch": -10,
                        "yaw": -55,
                        "type": "scene",
                        "text": "金属酒库",
                        "sceneId": "金属酒库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "金属酒库",
                    },
                    {
                        "pitch": -3,
                        "yaw": -38,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "厂区全景",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": -87,
                "pitch": -22,
                "hotSpots": [
                    {
                        "pitch": -8,
                        "yaw": -65,
                        "type": "scene",
                        "text": "露天金属酒库",
                        "sceneId": "露天金属酒库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "露天金属酒库",
                    },
                    {
                        "pitch": -6,
                        "yaw": 225,
                        "type": "scene",
                        "text": "红粮车间和稻壳车间",
                        "sceneId": "红粮车间和稻壳车间",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "红粮车间和稻壳车间",
                    },
                    {
                        "pitch": -8,
                        "yaw": 85,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "厂区全景",
                    }
                ]
            },
            "制曲厂区1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -112,
                "pitch": -40,
                "hotSpots": [
                    {
                        "pitch": -18,
                        "yaw": -90,
                        "type": "scene",
                        "text": "制曲厂区2",
                        "sceneId": "制曲厂区2",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制曲厂区2",
                    },
                    {
                        "pitch": 0,
                        "yaw": 115,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "厂区全景",
                    }
                ]
            },
            "制曲厂区2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA2.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E6%9B%B2%E5%8E%82%E5%8C%BA2.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -53,
                "pitch": -40,
                "hotSpots": [
                    {
                        "pitch": -20,
                        "yaw": -135,
                        "type": "scene",
                        "text": "制曲厂区1",
                        "sceneId": "制曲厂区1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制曲厂区1",
                    },
                    {
                        "pitch": 0,
                        "yaw": 200,
                        "type": "scene",
                        "text": "厂区全景",
                        "sceneId": "厂区全景",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "厂区全景",
                    }
                ]
            },
            "厂区大门": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8E%82%E5%8C%BA%E5%A4%A7%E9%97%A8.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8E%82%E5%8C%BA%E5%A4%A7%E9%97%A8.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 10,
                        "yaw": 4,
                        "type": "scene",
                        "text": "办公楼前",
                        "sceneId": "办公楼前",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "办公楼前",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 5,
                        "yaw": 0,
                        "type": "scene",
                        "text": "办公楼大厅",
                        "sceneId": "办公楼大厅",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "办公楼大厅",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 2,
                        "yaw": 58,
                        "type": "scene",
                        "text": "文化馆",
                        "sceneId": "前言",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "文化馆",
                    }
                ]
            },
            "前言": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%89%8D%E8%A8%80.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%89%8D%E8%A8%80.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 120,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "horizonRoll":1,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": 120,
                        "type": "scene",
                        "text": "简介",
                        "sceneId": "简介",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "简介",
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
                "hfov": 120,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    // {
                    //     "pitch": -10,
                    //     "yaw": 185,
                    //     "type": "scene",
                    //     "text": "19985工艺1",
                    //     "sceneId": "19985工艺1",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "19985工艺1",
                    // },
                    {
                        "pitch": -25,
                        "yaw": -140,
                        "type": "scene",
                        "text": "历史脉络",
                        "sceneId": "历史脉络",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "历史脉络",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    // {
                    //     "pitch": -15,
                    //     "yaw": 125,
                    //     "type": "scene",
                    //     "text": "简介",
                    //     "sceneId": "简介",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "简介",
                    // },
                    {
                        "pitch": -15,
                        "yaw": -80,
                        "type": "scene",
                        "text": "19985工艺1",
                        "sceneId": "19985工艺1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "19985工艺1",
                    }
                ]
            },
            "19985工艺1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/19958%E5%B7%A5%E8%89%BA1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/19958%E5%B7%A5%E8%89%BA1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -20,
                        "type": "scene",
                        "text": "古法酿造工具",
                        "sceneId": "古法酿造工具",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "古法酿造工具",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": 145,
                        "type": "scene",
                        "text": "历史脉络",
                        "sceneId": "历史脉络",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "历史脉络",
                    }
                ]
            },
            "19985工艺3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/19958%E5%B7%A5%E8%89%BA3.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/19958%E5%B7%A5%E8%89%BA3.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 180,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -110,
                        "type": "scene",
                        "text": "酒海",
                        "sceneId": "酒海",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海",
                    },
                    // {
                    //     "pitch": -15,
                    //     "yaw": 70,
                    //     "type": "scene",
                    //     "text": "19985工艺2",
                    //     "sceneId": "19985工艺2",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "19985工艺2",
                    // }
                ]
            },
            "酒海": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B7.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B7.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": -65,
                        "type": "scene",
                        "text": "企业产品",
                        "sceneId": "企业产品",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "企业产品",
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
                "hfov": 100,
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -15,
                        "yaw": 180,
                        "type": "scene",
                        "text": "前景展望",
                        "sceneId": "前景展望",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "前景展望",
                    },
                    // {
                    //     "pitch": -13,
                    //     "yaw": 108,
                    //     "type": "scene",
                    //     "text": "弧形投影",
                    //     "sceneId": "弧形投影",
                    //     "cssClass": "scenePoint",
                    //     "createTooltipFunc": scenespot,
                    //     "createTooltipArgs": "弧形投影",
                    // }
                ]
            },
            "前景展望": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%89%8D%E6%99%AF%E5%B1%95%E6%9C%9B.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%89%8D%E6%99%AF%E5%B1%95%E6%9C%9B.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 20,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw": -90,
                        "type": "scene",
                        "text": "弧形投影",
                        "sceneId": "弧形投影",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "弧形投影",
                    }
                ]
            },
            "弧形投影": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%BC%A7%E5%BD%A2%E6%8A%95%E5%BD%B1.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%BC%A7%E5%BD%A2%E6%8A%95%E5%BD%B1.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw": -82,
                        "type": "scene",
                        "text": "党建",
                        "sceneId": "党建",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "党建",
                    }
                ]
            },
            "党建": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%85%9A%E5%BB%BA.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%85%9A%E5%BB%BA.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -18,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -13,
                        "yaw":-110,
                        "type": "scene",
                        "text": "制曲室",
                        "sceneId": "培菌室",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制曲室",
                    }
                ]
            },
            "培菌室": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%9F%B9%E8%8F%8C%E5%AE%A4.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%9F%B9%E8%8F%8C%E5%AE%A4.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
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
                    },
                    {
                        "pitch": 0,
                        "yaw":0,
                        "type": "scene",
                        "text": "制酒车间",
                        "sceneId": "制酒车间1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -8,
                        "yaw": 0,
                        "type": "scene",
                        "text": "制酒车间2",
                        "sceneId": "制酒车间2",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间2",
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
                "hfov": 100,
                "minHfov": 20,
                "yaw": 90,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 0,
                        "yaw":169,
                        "type": "scene",
                        "text": "制酒车间3",
                        "sceneId": "制酒车间3",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间3",
                    },
                    {
                        "pitch": 0,
                        "yaw":5,
                        "type": "scene",
                        "text": "制酒车间4",
                        "sceneId": "制酒车间4",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间4",
                    },
                    {
                        "pitch": -8,
                        "yaw":-83,
                        "type": "scene",
                        "text": "自动化制酒车间1",
                        "sceneId": "自动化制酒车间1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间",
                    }
                ]
            },
            "制酒车间3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 0,
                        "yaw":-8,
                        "type": "scene",
                        "text": "制酒车间4",
                        "sceneId": "制酒车间4",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间4",
                    },
                    {
                        "pitch": 0,
                        "yaw":-45,
                        "type": "scene",
                        "text": "自动化制酒车间1",
                        "sceneId": "自动化制酒车间1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间",
                    }
                ]
            },
            "制酒车间4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -3,
                        "yaw":-8,
                        "type": "scene",
                        "text": "制酒车间3",
                        "sceneId": "制酒车间3",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "制酒车间3",
                    },
                    {
                        "pitch": 2,
                        "yaw":-36,
                        "type": "scene",
                        "text": "自动化制酒车间1",
                        "sceneId": "自动化制酒车间1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间",
                    }
                ]
            },
            "自动化制酒车间1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B41.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -6,
                        "yaw":24,
                        "type": "scene",
                        "text": "自动化制酒车间2",
                        "sceneId": "自动化制酒车间2",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间2",
                    },
                ]
            },
            "自动化制酒车间2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B42.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 15,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 8,
                        "yaw":115,
                        "type": "scene",
                        "text": "自动化制酒车间3",
                        "sceneId": "自动化制酒车间3",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间3",
                    },
                ]
            },
            "自动化制酒车间3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B43.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -170,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 4,
                        "yaw":-55,
                        "type": "scene",
                        "text": "自动化制酒车间4",
                        "sceneId": "自动化制酒车间4",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间4",
                    },
                ]
            },
            "自动化制酒车间4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B46.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B46.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -4,
                        "yaw":180,
                        "type": "scene",
                        "text": "自动化制酒车间5",
                        "sceneId": "自动化制酒车间5",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间5",
                    },
                ]
            },
            "自动化制酒车间5": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B45.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B45.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -4,
                        "yaw":90,
                        "type": "scene",
                        "text": "自动化制酒车间6",
                        "sceneId": "自动化制酒车间6",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间6",
                    },
                ]
            },
            "自动化制酒车间6": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B44.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 8,
                        "yaw":-3,
                        "type": "scene",
                        "text": "自动化制酒车间7",
                        "sceneId": "自动化制酒车间7",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间7",
                    },
                ]
            },
            "自动化制酒车间7": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B47.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B47.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 120,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 8,
                        "yaw":90,
                        "type": "scene",
                        "text": "自动化制酒车间8",
                        "sceneId": "自动化制酒车间8",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "自动化制酒车间8",
                    },
                ]
            },
            "自动化制酒车间8": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B48.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%88%B6%E9%85%92%E8%BD%A6%E9%97%B48.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 0,
                        "yaw":180,
                        "type": "scene",
                        "text": "酒海1",
                        "sceneId": "酒海1",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海",
                    },
                ]
            },
            "酒海1": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B71.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B71.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw":0,
                        "type": "scene",
                        "text": "酒海2",
                        "sceneId": "酒海2",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海2",
                    },
                ]
                
            },
            "酒海2": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B72.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B72.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -10,
                        "yaw":0,
                        "type": "scene",
                        "text": "酒海3",
                        "sceneId": "酒海3",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海3",
                    },
                ]
                
            },
            "酒海3": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B73.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B73.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw":0,
                        "type": "scene",
                        "text": "酒海4",
                        "sceneId": "酒海4",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海4",
                    },
                ]
            },
            "酒海4": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B74.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B74.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw":0,
                        "type": "scene",
                        "text": "酒海5",
                        "sceneId": "酒海5",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒海5",
                    },
                ]
            },
            "酒海5": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E6%B5%B75.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E6%B5%B75.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw":-84,
                        "type": "scene",
                        "text": "包装车间",
                        "sceneId": "包装车间",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "包装车间",
                    },
                ]
            },
            "包装车间": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E5%8C%85%E8%A3%85%E8%BD%A6%E9%97%B4.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E5%8C%85%E8%A3%85%E8%BD%A6%E9%97%B4.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": -115,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw":-69,
                        "type": "scene",
                        "text": "仓库",
                        "sceneId": "仓库",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "仓库",
                    },
                ]
            },
            "仓库": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E4%BB%93%E5%BA%93.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E4%BB%93%E5%BA%93.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 90,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": -2,
                        "yaw":87,
                        "type": "scene",
                        "text": "酒窖",
                        "sceneId": "酒窖",
                        "cssClass": "scenePoint",
                        "createTooltipFunc": scenespot,
                        "createTooltipArgs": "酒窖",
                    },
                ]
            },
            "酒窖": {
                "type": "equirectangular",
                "panorama": "http://rxb4dwevt.hb-bkt.clouddn.com/8192/%E9%85%92%E7%AA%96.jpg",
                "preview": "http://rxb4dwevt.hb-bkt.clouddn.com/cover/%E9%85%92%E7%AA%96.jpg",
                "autoLoad": true,
                "showControls": true,
                "haov": "360",
                "hfov": 100,
                "minHfov": 20,
                "yaw": 0,
                "pitch": 0,
                "hotSpots": [
                    {
                        "pitch": 2,
                        "yaw":0,
                        "type": "info",
                        "text": "凤香酒馆",
                        "URL":"https://www.baidu.com/"
                        // "sceneId": "酒窖",
                        // "cssClass": "scenePoint",
                        // "createTooltipFunc": scenespot,
                        // "createTooltipArgs": "酒窖",
                    },
                ]
            }
        }
    })
    viewer.on("scenechange", function () {
        navCurrTitle.value = findCategory("thumb/" + viewer.getScene() + ".jpg")
        thumbUrl.value = "thumb/" + viewer.getScene() + ".jpg"
        used.value.push(thumbUrl.value)

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


function scenespot(hotSpotDiv, args) {
    const span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
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
    background-image: url("../assets/icons/information-slab-circle-outline.svg");

    /* 防止图标重复 */
    background-size: contain;
    /* 让图标在盒子里面适当的缩放 */
    filter: invert(1);
    /* Applies the invert filter */
}

.scenePoint {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: 80px;
    background-image: url(../assets/icons/point.gif);
    background-size: cover;
}


.scenePoint span {
    position: relative;
    bottom: 20px;
    display: block;
    padding: 5px;
    width: fit-content;
    text-align: center;
    font-size: 0.8em;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    white-space: nowrap;

}



</style>

