<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <router-view></router-view>
    <button class="button-redirect">
      <router-link to="/" target="_blank">Strona główna</router-link>
    </button>
  </div>
</template>

<script>
import DashboardHeader from '../../components/dashboard/DashboardHeader.vue';
export default {
  components: {
    DashboardHeader,
  },
};
</script>

<style>
.button-redirect {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  padding: .4rem .8rem;
  border-left: 2px solid var(--grey);
  border-top: 2px solid var(--grey);
  border-radius: 6px 0 0 2px;
  background-color: var(--lightgrey);
  font-size: 12px;
  color: var(--white);
  opacity: 0.9;
}
</style>
