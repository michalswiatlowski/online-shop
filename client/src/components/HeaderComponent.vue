<template>
  <div class="nav">
    <span class="logo" @click="hideMenu">
      <router-link to="/">Funemki</router-link>
    </span>
    <ul class="nav-list" :class="{ 'nav-active': isActive }">
      <li class="nav-list__item" @click="hideMenu">
        <router-link to="/products">Galeria</router-link>
      </li>
      <li class="nav-list__item" @click="hideMenu">
        <router-link to="/about">O mnie</router-link>
      </li>
    </ul>
    <button class="hamburger" @click.stop="toggleMenu" :class="{ 'hamburger-active': isActive }">
      <span class="hamburger__box">
        <span class="hamburger__inner"></span>
      </span>
    </button>
  </div>
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
    document.addEventListener('click', ()=> {
    if (this.isActive == true) {
      this.hideMenu();
    }
      });
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid grey;
}

.logo {
  font-size: 2.2rem;
  font-family: var(--subFont);
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-list__item {
  width: 100px;
  text-align: center;
}

.nav-list__item a {
  padding: 5px 10px;
}

.hamburger {
  padding: 5px;
  display: none;
  z-index: 2;
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
  background-color: var(--black);
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

@media (max-width: 768px) {
  .hamburger {
    display: inline-block;
  }

  .nav-list {
    position: absolute;
    display: block;
    background-color: rgba(38, 84, 133, 0.74);
    color: var(--white);
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
    display: block;
    width: auto;
    padding: 5px;
    float: right;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .nav-active {
    height: 400px;
    width: 400px;
    right: -160px;
    top: -160px;
  }

  .nav-active > .nav-list__item:first-child {
    margin-top: 220px;
  }

  .nav-active > .nav-list__item {
    margin-right: 160px;
    opacity: 1;
  }
}
</style>
