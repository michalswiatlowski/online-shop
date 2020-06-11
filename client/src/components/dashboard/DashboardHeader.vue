<template>
  <nav class="nav">
    <span class="logo">
      <router-link to="/dashboard"><img src="../../assets/logo.png" alt="logo"/></router-link>
    </span>
    <button class="btn-logout" @click="logout">
      Wyloguj
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    logout() {
      console.log('logout');
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 2;
}

.logo {
  font-size: 2.2rem;
  font-family: var(--subFont);
  position: relative;
}

.logo a {
  display: flex;
}

.logo img {
  height: 30px;
}

.logo::after {
  content: 'DASHBOARD';
  position: absolute;
  top: 0;
  right: -30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.6rem;
  color: var(--white);
  background-color: var(--grey);
  padding: 2px 4px;
  border: 1px solid var(--black);
  border-radius: 4px;
  transform: rotate(20deg);
  opacity: 0.7;
  z-index: -1;
}

.btn-logout {
  padding: 0.4rem 0.8rem;
  border: 2px solid var(--grey);
  background-color: var(--lightgrey);
  color: var(--white);
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .nav-list {
    position: static;
    overflow: auto;
    border-radius: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    background-color: transparent;
  }
  .nav-list__item {
    width: 104px;
    opacity: 1;
  }

  .nav-list__item a {
    color: var(--lightgrey);
    font-size: 0.9rem;
    letter-spacing: 0.06rem;
    padding: 10px;
    border-bottom: 1px solid transparent;
    transition: 0.2s ease-in-out;
  }

  .nav-list__item .router-link-active {
    color: var(--grey);
    border-bottom-color: var(--grey);
  }

  .nav-list__item:hover a {
    color: var(--grey);
    transition: 0.2s ease-in-out;
  }
}
</style>
