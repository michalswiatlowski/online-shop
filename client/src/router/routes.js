import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ProductsList from '../views/ProductsList.vue';
import Cetegories from '../views/Categories.vue';
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
    path: '/o-mnie',
    name: 'About',
    components: {
      default: About,
    },
  },
  {
    path: '/kategorie',
    components: {
      default: Cetegories,
    },
  },
  {
    path: '/torebki',
    components: {
      default: ProductsList,
    }
  },
  {
    path: '/bizuteria',
    components: {
      default: ProductsList,
    },
  },
  {
    path: '/torebki/:id',
    name: 'product',
    components: {
      default: Product,
    },
  },
  {
    path: '/bizuteria/:id',
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
