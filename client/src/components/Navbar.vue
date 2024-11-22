<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary ps-1 pe-3">
    <router-link class="navbar-brand d-flex ms-3" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center ">
        <div class="row">
          <img src="src\assets\img\Prev-Gem.svg" alt="Gem" class="img-fluid col-2 col-md-1"
            title="Goblin Inventory Management Logo">
          <p class="m-0 fs-4 fs-md-2 col-6 col-md-11 d-none d-md-block textshadow">Goblin Inventory Management</p>
          <p class="m-0 fs-4 fs-md-2 col-6 col-md-11 d-md-none d-block textshadow">G.I.M.</p>
        </div>
      </div>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">

      </ul>

    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
