// console.log('ok')
// 导图vue
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

import '../node_modules/mint-ui/lib/style.min.css'
import { Header, Swipe, SwipeItem, Button,Switch } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
// 导入路由模块

import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入mui包
import './lib/css/mui.min.css'
import './lib/fonts/mui.ttf'
import './lib/css/icons-extra.css'
import './lib/fonts/mui-icons-extra.ttf'


// 导入路由模块
import router from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入mui包
import mui from './lib/js/mui.js'
Vue.prototype.mui = mui

// 注册store
import Vuex from 'vuex'
Vue.use(Vuex)

// localStorage.clear() //清除购物车数据
// 页面加载就获取对应的car中购物车数量
var car = JSON.parse(localStorage.getItem('car') || '[]')

// vuex的实例化
const store = new Vuex.Store({
    state: {
        car: car

    },
    mutations: {
        addToCar(state, goodsinfos) {
            var flag = false;//假设商品不存在
            state.car.some(item => {
                if (item.id === goodsindos.id) {
                    item.count += parseInt(goodsinfos.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfos)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updataSelectCount(state, goodsinfo) {
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        remove(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }

    },
    getters: { //this.$store.getters.xxxx
        // 获取所有car中的count值
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var x = {}  //{id:count}
            state.car.forEach(item => {
                x[item.id] = item.count
            })
            return x
        },
        // getGoodsSelected(state){
        //     var y = {}
        //     state.car.forEach(item=>{
        //         y[item.id] = item.selected
        //     })
        //     return y
        // }
        // 获取商品的总数量以及总价格
        getAllCountANDAmount(state) {
            var obj = {
                m: 0,  //数量
                n: 0, //总价
            }

            state.car.forEach(item => {
                obj.m += item.count,
                    obj.n += item.price * item.count
            })
            return obj
        }
    }
})



let vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {},
    router: router,
    render: c => c(App),
    store

})
