import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Loading from './views/loading'
import page1 from './views/page1'

export default new Router({
    routes: [
        {path:'',name:'loading',component:Loading},
        {path:'/page1',name:'page1',component:page1},
    ]
})

