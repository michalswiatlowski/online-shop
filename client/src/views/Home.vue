<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="container">
      This is a home route
    </div>
    <AsideComponent></AsideComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import AsideComponent from '../components/AsideComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  },
};
</script>

<style></style>
