<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-page container-fluid">
    <div class="row">
      <div class="col-2 bg-secondary text-light fs-4 pt-3 d-flex flex-column justify-content-around">
        <p class="text-center m-0"><i class="mdi mdi-truck-outline"></i> Receiving</p>
        <hr />
        <p class="text-center m-0"><i class="mdi mdi-treasure-chest-outline"></i> Inventory</p>
        <hr />
        <p class="text-center m-0"><i class="mdi mdi-hammer-screwdriver"></i> Production</p>
        <hr />
        <p class="text-center m-0"><i class="mdi mdi-cash-multiple"></i> Sales</p>
      </div>
      <router-view class="col" />
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: 100vh;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
