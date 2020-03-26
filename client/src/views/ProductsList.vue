<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <span>Results:</span>
      <div v-for="product in products" v-bind:key="product._id">
        Product: {{ product.model }} created at: {{ product.createdAt }}
      </div>
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
      products: [],
      error: '',
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

<style></style>
