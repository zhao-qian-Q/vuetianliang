import Vue from '../node_modules/vue/dist/vue.min.js'
// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 引入组件
import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import shopCar from './components/tabbar/ShopCar.vue'
import search from './components/tabbar/Search.vue'

// 引入新闻列表
import newsList from './components/news/newsList.vue'
// 引入购物列表那一页
import goodsList from './components/goodsList/GoodsList.vue'

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: 'home' },
        {path: '/home', component: home},
        { path: '/member', component: member },
        { path: '/shopCar', component: shopCar },
        { path: '/search', component: search },
        { path: '/home/newsList', component: newsList },
        { path: '/home/goodsList', component: goodsList },

    ]
})

export default router