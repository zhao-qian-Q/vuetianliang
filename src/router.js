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
import goodsInfo from './components/goodsList/Goodsinfo.vue'
//引入图片分享页
import shareImg from './components/shareImg/shareImg.vue'
// 导入视频专区页
import videos from './components/videos/Videos.vue'
// 导入联系我们页面
import contactUs from './components/contactUs/ContactUs.vue'
// 导入留言板
import leaveMessage from './components/leaveMessage/LeaveMessage.vue'

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: 'home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopCar', component: shopCar },
        { path: '/search', component: search },
        { path: '/home/newsList', component: newsList },
        { path: '/home/goodsList', component: goodsList },
        { path: '/home/goodsInfo/:id', component: goodsInfo },
        { path: '/home/shareImg', component: shareImg },
        { path: '/home/videos', component: videos },
        { path: '/home/contactUs', component: contactUs },
        { path: '/home/leaveMessage', component: leaveMessage },




    ]
})

export default router