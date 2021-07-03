import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getToken } from '../utils/cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

//导航守卫
//没有登录的时候，去访问首页，自动跳到登录页
//已经登录的时候，去访问登录页，自动跳到首页
router.beforeEach((to, from, next) => {
  const whiteList = ['/login'] //白名单，防止循环
  const token = getToken()
  // console.log(token);
  if (token) {
    if (to.path == '/login') {
      next('/')
    }
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
