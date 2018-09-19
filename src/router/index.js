import Vue from 'vue'
import Router from 'vue-router'
import TheLanding from '@/components/landing'

//Pages Styles
import Branding from '@/components/Page-styles/Branding'
import Color from '@/components/Page-styles/Color'
import Icons from '@/components/Page-styles/Icons'
import Typography from '@/components/Page-styles/Typography'
import Layout from '@/components/Page-styles/Layout'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: TheLanding
    },
    {
      path: '/branding',
      name: 'Branding',
      component: Branding
    },
    {
      path: '/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
