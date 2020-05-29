<template>
  <div>
    <h1>Panel Funemki</h1>
    <form>
      <input type="text" v-model="login" placeholder="Login">
      <input type="password" v-model="password" placeholder="Hasło">
      <button>Zaloguj</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    }
  }
};
</script>

<style></style>
