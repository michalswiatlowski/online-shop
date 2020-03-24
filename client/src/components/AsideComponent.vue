<template>
  <aside class="aside">
    <div class="vertical--header">
      <span><strong>Aside Header</strong></span>
    </div>
    <div class="social-media">
      <a href="#">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a gref="#">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style>
.aside {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical--header {
  display: none;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media a {
  padding: 4px 8px;
  font-size: 1.2rem;
  color: var(--lightgrey);
  transition: 0.2s;
  cursor: pointer;
}

.social-media i:hover {
  color: var(--grey);
  transition: 0.2s;
}

@media (min-width: 768px) {
  .aside {
    position: fixed;
    width: 100px;
    min-height: calc(100vh - 70px);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
  }

  .vertical--header {
    display: block;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: var(--lightgrey);
  }

  .social-media {
    flex-direction: column;
  }
}
</style>
