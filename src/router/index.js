import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
// 懒加载
const Find = () => import('@/views/Find')
const My = () => import('@/views/My')
const Zixun = () => import('@/views/Zixun')
const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login.vue')
const Address = () => import('@/views/Adress')
const Like = () => import('@/views/like')
const MyHouse = () => import('@/views/MyHouse')
const City = () => import('@/views/City')
const Rent = () => import('@/views/rent')
const Search = () => import('@/views/Search')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/find', component: Find },
      { path: '/my', component: My },
      { path: '/zixun', component: Zixun },
      { path: '/home', component: Home }
    ]
  },
  { path: '/login', component: Login },
  { path: '/address', component: Address },
  { path: '/like', component: Like },
  { path: '/myhouse', component: MyHouse },
  { path: '/city', component: City },
  { path: '/rent', component: Rent },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  routes
})

export default router
