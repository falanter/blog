import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: ()=>import ('@/pages/Index/index.vue')
    },{
      path:'/test',
      component: ()=>import ('@/pages/Test/test.vue'),
      meta:{requiresAuth:true}
    },{
      path:'/login',
      component: ()=>import ('@/pages/Login/login.vue')
    },{
      path:'/register',
      component: ()=>import ('@/pages/Register/register.vue')
    },{
      path:'/my',
      component: ()=>import ('@/pages/My/my.vue'),
      meta:{requiresAuth:true}
    },{
      path:'/detail/:blogId',
      component:()=>import('@/pages/Detail/detail.vue')
    },{
      path: '/user/:userId',
      component:()=>import('@/pages/User/user.vue')
    },{
      path:'/edit/:blogId',
      component:()=>import('@/pages/Edit/edit.vue'),
      meta:{requiresAuth:true}
    },{
      path:'/create',
      component: ()=>import ('@/pages/Create/create.vue'),
      meta:{requiresAuth:true}
    },{
      path:'/tell/:userId',
      component: ()=>import ('@/pages/Tell/tell.vue'),
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router