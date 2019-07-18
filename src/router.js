import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Exam01 from "./components/Exam01.vue"
import ExamMessageBox02 from "./components/ExamMessageBox02.vue"
import ExamField03 from "./components/ExamField03.vue"
import Login04 from "./components/Login04.vue"
import MyField_taobao05 from 
"./components/MyField_taobao05.vue"
import ExamForm06 from "./components/ExamForm06.vue"
import ExamContainer from "./components/ExamContainer.vue"
import ExamTabbar from "./components/ExamTabbar.vue"
import F from "./components/F.vue"
import Home from "./components/weixin/Home.vue"
import MessageList from  "./components/weixin/common/MessageList.vue"
import Login from "./components/xz/Login.vue"
import product from "./components/xz/product.vue"
import XZHome from "./components/xz/Home.vue"
import Cart from "./components/xz/common/Cart.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Cart',component:Cart},
    {path:'/XZHome',component:XZHome},
    {path:'/product',component:product},
    {path:'/Login',component:Login},
    {path:'/MessageList',component:MessageList},
    {path:'/Home',component:Home},
    {path:'/F',component:F},
    {path:'/ExamTabbar',component:ExamTabbar},
    {path:'/ExamContainer',component:ExamContainer},
    {path:'/ExamForm06',component:ExamForm06},
    {path:'/MyField_taobao05',component:MyField_taobao05},
    {path:'/Login04',component:Login04},
    {path:'/ExamField03',component:ExamField03},
    {path:'/ExamMessageBox02',component:ExamMessageBox02},
    //{path:'/',//component:HelloContainer},
    {path:'/',redirect:"/XZHome"},
    {path:'/Exam01',component:Exam01},

  ]
})
