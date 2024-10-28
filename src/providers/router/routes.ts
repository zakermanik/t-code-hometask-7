import { ROUTER_NAMES } from '@/shared/router/routes'
import type { RouteRecordRaw } from 'vue-router'

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTER_NAMES.MAIN,
    redirect: '/shop',
    component: () => import('@/pages/MainPage.vue'),
    children: [
      {
        path: '/shop',
        name: ROUTER_NAMES.SHOP,
        component: () => import('@/pages/ShopList.vue'),
        meta: {
          title: 'Магазин',
        },
      },
      {
        path: '/to-do',
        name: ROUTER_NAMES.TODO,
        component: () => import('@/pages/ToDoList.vue'),
        meta: {
          title: 'ToDo',
        },
      },
    ],
  },
]

export default routes
