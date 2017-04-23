import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VFor from '@/components/VFor'
import QRcode from '@/components/QRcode'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Hello', component: Hello,
      children:[
        { path:'/QRcode', component:QRcode, },
      ]
    },
    { path: '/VFor', component: VFor },

  ]
})
