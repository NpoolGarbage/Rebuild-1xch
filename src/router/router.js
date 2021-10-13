import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      // redirect: to => {
      //   return { path: '/component' }
      // },
      component: () => import('../views/background/index.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../views/login/index.vue'),
        },
        {
          path: 'register',
          component: () => import('../views/register/index.vue'),
        },
        {
          path: 'forget',
          component: () => import('../views/forget/index.vue'),
        }]
    },
    // {
    //   path: '/component',
    //   component: () => import('../views/components/ChangeLang.vue')
    // },
    {
      path: '/main',
      component: () => import('../views/main/index.vue'),
      children: [
        {
          path: 'security',
          component: () => import('../views/security/index.vue'),
        },
        {
          path: 'treasure',
          component: () => import('../views/treasure/index.vue'),
        },
        {
          path: 'power',
          component: () => import('../views/power/index.vue'),
          children: [
            {
              path: 'myorder',
              component: () => import('../views/myorder/index.vue'),
            },
            {
              path: 'progressing',
              component: () => import('../views/progressingorder/index.vue'),
            },
            {
              path: 'wait',
              component: () => import('../views/waitorder/index.vue'),
            },
            {
              path: 'end',
              component: () => import('../views/endorder/index.vue'),
            },
          ],
        },
        {
          path: 'changepass',
          component: () => import('../views/changepass/index.vue'),
        },
        {
          path: 'help',
          component: () => import('../views/help/index.vue'),
        },
        {
          path: 'law',
          component: () => import('../views/law/index.vue'),
        },
        {
          path: 'protocol',
          component: () => import('../views/protocol/index.vue'),
        },
        {
          path: 'aboutus',
          component: () => import('../views/aboutus/index.vue'),
        },
        {
          path: 'policy',
          component: () => import('../views/policy/index.vue'),
        },
        {
          path: 'basic-detail',
          component: () => import('../views/detail/basic/index.vue'),
        },
        {
          path: 'mortgage-detail',
          component: () => import('../views/detail/mortgage/index.vue'),
        },
        {
          path: 'deposit-record/:coin',
          component: () => import('../views/record/deposit/index.vue'),
        },
        {
          path: 'withdraw-record/:coin',
          component: () => import('../views/record/withdraw/index.vue'),
        },
      ],
    },
  ]
})