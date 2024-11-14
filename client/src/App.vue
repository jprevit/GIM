<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-page container-fluid">
    <div class="row">
      <Sidebar />
      <router-view class="col" />
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: 100vh;
}

.height {
  height: calc(100vh - 64px);
}

.h25 {
  height: 25vh;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
