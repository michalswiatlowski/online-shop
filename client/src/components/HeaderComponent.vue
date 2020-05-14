<template>
  <nav class="nav">
    <span class="logo" @click="hideMenu">
      <router-link to="/"><img src="../assets/logo.png" alt="logo"/></router-link>
    </span>
    <ul class="nav-list" :class="{ 'nav-active': isActive }">
      <li class="nav-list__item" @click="hideMenu">
        <router-link to="/torebki">Torebki</router-link>
      </li>
      <li class="nav-list__item" @click="hideMenu">
        <router-link to="/bizuteria">Biżuteria</router-link>
      </li>
      <li class="nav-list__item" @click="hideMenu">
        <router-link to="/o-mnie">O mnie</router-link>
      </li>
    </ul>
    <button class="hamburger" @click.stop="toggleMenu" :class="{ 'hamburger-active': isActive }">
      <span class="hamburger__box">
        <span class="hamburger__inner"></span>
      </span>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    hideMenu() {
      this.isActive = false;
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      if (this.isActive == true) {
        this.hideMenu();
      }
    });
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 30px;
  z-index: 2;
}

.logo {
  font-size: 2.2rem;
  font-family: var(--subFont);
}

.logo a {
  display: flex;
}

.logo img {
  height: 30px;
}

.nav-list {
  position: absolute;
  display: block;
  background-color: rgba(38, 84, 133, 0.74);
  z-index: 1;
  height: 0;
  width: 0;
  right: 0;
  top: 0;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.nav-list__item {
  text-align: center;
  display: block;
  width: auto;
  float: right;
  margin: 3px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.nav-list__item a {
  display: block;
  padding: 5px 10px;
  color: var(--white);
}

.nav-list__item .router-link-active {
  color: var(--white);
  border-bottom: 1px solid var(--white);
}

.nav-active {
  height: 400px;
  width: 400px;
  right: -150px;
  top: -160px;
}

.nav-active > .nav-list__item:first-child {
  margin-top: 220px;
}

.nav-active > .nav-list__item {
  margin-right: 160px;
  opacity: 1;
}

.hamburger {
  padding: 10px;
  display: inline-block;
  z-index: 2;
  outline: none;
}

.hamburger__box {
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger__inner {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
}

.hamburger__inner,
.hamburger__inner::before,
.hamburger__inner::after {
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background-color: var(--grey);
  position: absolute;
}

.hamburger__inner::before,
.hamburger__inner::after {
  content: '';
  left: 0;
  transition: transform 0.1s 0.2s ease-in-out;
}

.hamburger__inner::before {
  top: -10px;
}

.hamburger__inner::after {
  top: 10px;  
}

.hamburger-active .hamburger__inner::before {
  transform: translateY(10px) rotateZ(45deg);
}

.hamburger-active .hamburger__inner::after {
  transform: translateY(-10px) rotateZ(-45deg);
}

.hamburger-active .hamburger__inner {
  background-color: transparent;
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
