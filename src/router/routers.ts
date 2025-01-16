import { createRouter, createWebHistory } from 'vue-router';

export const constantRouterMap = [
  {
    path: '/',
    // mata: { title: 'Cm.Chr.Menu.textLogin' },
    // component: () => import('@/components/HomePage.vue')
    component: () => import('@/components/GameView.vue')
  }
]

export const asyncRouter = [
  {
    path: '/#',
    name: 'layout',
    component: () => import('@/components/Layout.vue'),
    // meta: { title: 'Cm.Chr.Menu.txtHome' },
    // children: [
    //   {
    //     name: 'homePage',
    //     path: '/homepage',
    //     // meta: { title: 'Cm.Chr.Menu.txtHome', icon: 'menuHome' },
    //     component: () => import('@/components/Favorites.vue'),
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: asyncRouter,
});

export default router;
