import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ProductsList from '../views/ProductsList.vue';
import Product from '../views/Product.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
    },
  },
  {
    path: '/omnie',
    name: 'About',
    components: {
      default: About,
    },
  },
  {
    path: '/galeria',
    components: {
      default: ProductsList,
    },
  },
  {
    path: '/galeria/:id',
    name: 'product',
    components: {
      default: Product,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];
