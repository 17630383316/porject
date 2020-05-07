import Vue from 'vue'
import Router from 'vue-router'
import Yu1 from '@/components/index.vue'
import Yu2 from '@/components/new_file.vue'

Vue.use(Router)

export default new Router({
  routes: [{
     path: '/Yu1',
     component: Yu1,
     children: [{
         path: 'Yu2',
         component: Yu2
       },
       {
         path: '/',
         redirect: 'Yu2'
       }]
   },
   {
     path: '/',
     redirect: 'Yu1'
   }
  ]
})
