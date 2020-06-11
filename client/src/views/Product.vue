<template>
  <!-- 
    h1 - to nazwa plus np keywords
    keywords można dać ewentualnie w h2
    'Unlike H1 tag that is used once, H2 tags can be used several times, meaning you can add in your keywords here as well. The best practice is to add your primary keyword in three to four H2 tags.'

   -->
  <div class="product-cart">
    <div class="gallery-section"></div>
    <div class="sidebar-section">

    <a @click="$router.back()">Powrót</a>
    </div>
    <div class="description-section"></div>

    <p>{{ product }}</p>
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
