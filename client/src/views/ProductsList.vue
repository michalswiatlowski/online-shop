<template>
  <div>
    <span>Results:</span>
    <div v-for="product in products" v-bind:key="product._id">Product: {{ product.model }} created at: {{ product.createdAt }}</div>
  </div>
</template>

<script>
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
};
</script>

<style></style>
