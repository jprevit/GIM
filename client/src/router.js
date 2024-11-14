import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/Receiving',
    name: 'Receiving',
    component: loadPage('ReceivingPage')
  },
  {
    path: '/Inventory',
    name: 'Inventory',
    component: loadPage('InventoryPage')
  },
  {
    path: '/Production',
    name: 'Production',
    component: loadPage('ProductionPage')
  },{
    path: '/Sales',
    name: 'Sales',
    component: loadPage('SalesPage')
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
