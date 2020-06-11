<template>
  <div class="wrapper">
    <div class="panel">
      <div class="panel__header">
        <h2 class="panel-title">Skróty do aplikacji</h2>
      </div>
      <ul class="panel__menu">
        <router-link class="menu-item" tag="li" to="/dashboard/products">
          <span class="menu-item__title">
            Produkty
          </span>
          <span class="menu-item__description">
            - przeglądaj, dodawaj, edytuj
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  width: 90vw;
  margin: 0 auto;
}

.panel {
  background-color: var(--white);
  border: 1px solid var(--lightgrey);
  min-height: 50vh;
  margin-top: 10px;
}

.panel__header {
  background-color: var(--grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
}

.panel-title {
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
}

.panel__menu {
  padding: 10px;
}

.menu-item {
  background-color: white;
  padding: 5px 10px;
  border: 1px solid var(--grey);
  border-radius: 4px;
  cursor: pointer;
}

.menu-item__title {
  font-weight: 700;
}

.menu-item__description {
  font-size: 0.8rem;
  font-style: italic;
}
</style>
