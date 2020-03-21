<template>
  <div>
    <HeaderComponent></HeaderComponent>

    <h1>
      Hello on About page
    </h1>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
