import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VFor from '@/components/VFor'
import QRcode from '@/components/QRcode'

import GitTest2 from '@/components/GitTest2'

import GitTest from '@/components/GitTest'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Hello', component: Hello,
      children:[
        { path:'/QRcode', component:QRcode, },
      ]
    },
    { path: '/VFor', component: VFor },

    { path: '/GitTest2', component: GitTest2 },

    { path:'/GitTest',component: GitTest },

  ]
})
