import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import VFor from '@/components/vFor'
import QRcode from '@/components/qrCode'
import ScrollTop from "@/components/scrollTop/scrollTop"
import ScrollTopA from "@/components/scrollTop/scrollTopA"
import ScrollTopB from "@/components/scrollTop/scrollTopB"
import Scroll from "@/components/scroll"
import localStorage from "@/components/localStorage"



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Hello', component: Hello,
      children:[
        { path:'/QRcode', component:QRcode, },
      ]
    },
    { path: '/VFor', component: VFor },
    {path:'/ScrollTop',component:ScrollTop,
    	children:[
    		{path:'/ScrollTopA',component:ScrollTopA},
		  	{path:'/ScrollTopB',component:ScrollTopB}
    	]
  	},
    {path:'/Scroll',component:Scroll},
    {path:'/localStorage',component:localStorage}
  ]
})
