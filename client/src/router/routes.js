import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ProductsList from '../views/ProductsList.vue';
import Cetegories from '../views/Categories.vue';
import Product from '../views/Product.vue';
import DashboardLogin from '../views/dashboard/Login.vue';
import DashboardPanel from '../views/dashboard/Panel.vue';
import DashboardStart from '../views/dashboard/Start.vue';
import DashboardProducts from '../views/dashboard/Products.vue';
import DashboardProductAdd from '../views/dashboard/ProductAdd.vue';
import DashboardProductEdit from '../views/dashboard/ProductEdit.vue';

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
    path: '/dashboard/login',
    name: 'login',
    components: {
      default: DashboardLogin,
    }
  },
  {
    path: '/dashboard',
    name: 'panel',
    components: {
      default: DashboardPanel,
    },
    children: [
      { path: '', component: DashboardStart},
      { path: 'products', name: 'showProducts', component: DashboardProducts},
      { path: 'products/new', component: DashboardProductAdd},
      { path: 'products/:id', name: 'editProduct', component: DashboardProductEdit},
      // { path: 'products/:id/edit', component: DashboardStart},
    ]
  },
  {
    path: '*',
    redirect: '/',
  },
];
