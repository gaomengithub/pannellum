import { defineStore } from 'pinia'
import { ref } from 'vue'
import prefix from '../components/global'
export const useCounterStore = defineStore('main', () => {
    const overlay = ref(false)
    const thumbUrl = ref(prefix + "/thumb/厂区全景.jpg")
    const navCurrTitle = ref("鸟瞰航拍")
    const thumbUrls = {
        "鸟瞰航拍": [
            prefix + "/thumb/厂区全景.jpg",
            prefix + "/thumb/露天金属酒库.jpg",
            prefix + "/thumb/金属酒库.jpg",
            prefix + "/thumb/红粮车间和稻壳车间.jpg",
            prefix + "/thumb/制曲厂区1.jpg",
            prefix + "/thumb/制曲厂区2.jpg",
        ],
        "办公楼": [
            prefix + "/thumb/厂区大门.jpg",
            prefix + "/thumb/办公楼前.jpg",
            prefix + "/thumb/办公楼大厅.jpg",
        ],
        "文化馆": [
            prefix + "/thumb/前言.jpg",
            prefix + "/thumb/简介.jpg",
            prefix + "/thumb/历史脉络.jpg",
            prefix + "/thumb/19985工艺1.jpg",
            prefix + "/thumb/19985工艺2.jpg",
            prefix + "/thumb/古法酿造工具.jpg",
            prefix + "/thumb/酒海.jpg",
            prefix + "/thumb/前景展望.jpg",
            prefix + "/thumb/书法区.jpg",
            prefix + "/thumb/企业产品.jpg",
            prefix + "/thumb/弧形投影.jpg",
            prefix + "/thumb/党建.jpg",

        ],
        "制曲室": [
            prefix + "/thumb/培菌室.jpg",
        ],
        "制酒车间": [
            prefix + "/thumb/制酒车间1.jpg",
            prefix + "/thumb/制酒车间2.jpg",
            prefix + "/thumb/制酒车间3.jpg",
            prefix + "/thumb/制酒车间4.jpg",
        ],
        "自动化制酒车间": [
            prefix + "/thumb/自动化制酒车间1.jpg",
            prefix + "/thumb/自动化制酒车间2.jpg",
            prefix + "/thumb/自动化制酒车间3.jpg",
            prefix + "/thumb/自动化制酒车间4.jpg",
            prefix + "/thumb/自动化制酒车间5.jpg",
            prefix + "/thumb/自动化制酒车间6.jpg",
            prefix + "/thumb/自动化制酒车间7.jpg",
            prefix + "/thumb/自动化制酒车间8.jpg",
        ],
        "酒海": [
            prefix + "/thumb/酒海1.jpg",
            prefix + "/thumb/酒海2.jpg",
            prefix + "/thumb/酒海3.jpg",
            prefix + "/thumb/酒海4.jpg",
            prefix + "/thumb/酒海5.jpg",
        ],
        "包装车间": [
            prefix + "/thumb/包装车间.jpg",
            prefix + "/thumb/仓库.jpg",
        ],
        "酒窖": [
            prefix + "/thumb/酒窖.jpg",
        ]
    }
    const used = ref([prefix + "/thumb/厂区全景.jpg"])
    return { overlay, thumbUrl, navCurrTitle ,thumbUrls ,used}
})