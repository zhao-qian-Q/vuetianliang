// console.log('ok')
// 导图vue
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

import '../node_modules/mint-ui/lib/style.min.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
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

let vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {},
    router: router,
    render: c => c(App),

})
