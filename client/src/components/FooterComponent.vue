<template>
  <footer class="footer">
    <a href="#" class="paragraph">Polityka prywatności</a>
    <p class="paragraph">&copy; {{ currentYear }} Funemki. All rights reserved</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: (new Date()).getFullYear(),
    }
  }
}
</script>

<style scoped>
.footer {
text-align: center;
padding: 10px;
}

.paragraph {
  font-size: 0.6rem;
  color: var(--lightgrey);
  transition: 0.2s;
}

a.paragraph:hover {
  color: var(--grey);
  transition: 0.2s
}

@media (min-width: 768px)  {
  .footer {
    padding-left: 100px;
    text-align: left;
  }
}
</style>