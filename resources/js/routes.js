import ProductsView from './components/ProductsView.vue'
import CartView from './components/CartView.vue'
import NotFound from './components/NotFoundComponent.vue'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: ProductsView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]