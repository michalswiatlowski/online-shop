<template>
  <div class="product-cart">
    <p>Id route: {{ $route.params.id }}</p>
    <p>{{ product }}</p>
    <a @click="$router.back()">Powrót</a>
  </div>
</template>

<script>
import ProductService from '../ProductService';
export default {
  data() {
    return {
      product: [],
      error: '',
      route: this.$route.params.id,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  watch: {
    '$route.params.id': async function() {
      try {
        this.product = await ProductService.getProduct(this.$route.params.id);
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  async created() {
    try {
      this.product = await ProductService.getProduct(this.route);
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped></style>
