<template>
  <div class="product-cart">
    <p>Id route: {{ $route.params.id }}</p>
    <a @click="$router.back()">Powrót</a>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
    
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
}
</script>

<style scoped>

</style>