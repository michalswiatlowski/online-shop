<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <div>{{ path }} {{ $route.fullPath }}</div>
      <ul class="products-list">
        <li class="product-item"></li>
        <li v-for="product in products" :key="product._id" class="product-item">
          <router-link :to="{ path: $route.fullPath + '/' + product._id }" tag="article" class="product-card">
            <img
              class="product-card__image"
              src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
              alt=""
              title=""
            />
            <h2 class="product-card__title">{{ product.name }}</h2>
          </router-link>
        </li>
      </ul>
    </div>

    <AsideComponent></AsideComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import AsideComponent from '../components/AsideComponent.vue';
import ProductService from '../ProductService';

export default {
  name: 'Products',
  data() {
    return {
      path: this.$route.fullPath,
      products: [],
      error: '',
      numbers: 12,
    };
  },
  async created() {
    try {
      this.products = await ProductService.getProducts();
    } catch (err) {
      this.error = err.message;
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  },
};
</script>

<style scoped>
.products-list {
  display: grid;
  grid-auto-rows: 400px;
  grid-auto-flow: dense;
  align-items: center;
  gap: 20px;
}

.product-item:nth-child(1) {
  display: none;
}

.product-card {
  display: flex;
  flex-direction: column;
}

.product-card__title {
  padding: 0.3rem;
  font-size: 1.2rem;
  font-weight: 400;
}

.product-card__image {
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 768px) {
  .products-list {
    grid-auto-rows: 200px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
  }

  .product-item {
    grid-row-end: span 2;
  }

  .product-item:nth-child(1) {
    display: block;
    grid-row-start: span 1;
    grid-column-start: 2;
  }
}
</style>
