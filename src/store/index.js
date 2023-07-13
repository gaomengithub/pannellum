import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('main', () => {
    const overlay = ref(false)
    const thumbUrl = ref("thumb/厂区全景.jpg")
    const navCurrTitle = ref("鸟瞰航拍")
    const thumbUrls = {
        "鸟瞰航拍": [
            "thumb/厂区全景.jpg",
            "thumb/露天金属酒库.jpg",
            "thumb/金属酒库.jpg",
            "thumb/红粮车间和稻壳车间.jpg",
            "thumb/制曲厂区1.jpg",
            "thumb/制曲厂区2.jpg",
        ],
        "办公楼": [
            "thumb/厂区大门.jpg",
            "thumb/办公楼前.jpg",
            "thumb/办公楼大厅.jpg",
        ],
        "文化馆": [
            "thumb/前言.jpg",
            "thumb/简介.jpg",
            "thumb/历史脉络.jpg",
            "thumb/19985工艺1.jpg",
            "thumb/19985工艺2.jpg",
            "thumb/古法酿造工具.jpg",
            "thumb/酒海.jpg",
            "thumb/前景展望.jpg",
            "thumb/书法区.jpg",
            "thumb/企业产品.jpg",
            "thumb/弧形投影.jpg",
            "thumb/党建.jpg",

        ],
        "制曲室": [
            "thumb/培菌室.jpg",
        ],
        "制酒车间": [
            "thumb/制酒车间1.jpg",
            "thumb/制酒车间2.jpg",
            "thumb/制酒车间3.jpg",
            "thumb/制酒车间4.jpg",
        ],
        "自动化制酒车间": [
            "thumb/自动化制酒车间1.jpg",
            "thumb/自动化制酒车间2.jpg",
            "thumb/自动化制酒车间3.jpg",
            "thumb/自动化制酒车间4.jpg",
            "thumb/自动化制酒车间5.jpg",
            "thumb/自动化制酒车间6.jpg",
            "thumb/自动化制酒车间7.jpg",
            "thumb/自动化制酒车间8.jpg",
        ],
        "酒海": [
            "thumb/酒海1.jpg",
            "thumb/酒海2.jpg",
            "thumb/酒海3.jpg",
            "thumb/酒海4.jpg",
            "thumb/酒海5.jpg",
        ],
        "包装车间": [
            "thumb/包装车间.jpg",
            "thumb/仓库.jpg",
        ],
        "酒窖": [
            "thumb/酒窖.jpg",
        ]
    }
    const used = ref(["thumb/厂区全景.jpg"])
    return { overlay, thumbUrl, navCurrTitle ,thumbUrls ,used}
})