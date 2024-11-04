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
      <div class="col-2 bg-secondary text-light fs-4 p-0 d-flex flex-column justify-content-around height">
        <div class="h25 selectable align-content-center">
          <p class="text-center m-0 "><i class="mdi mdi-truck-outline"></i> Receiving</p>
        </div>
        <div class="h25 selectable align-content-center">
          <p class="text-center m-0 "><i class="mdi mdi-treasure-chest-outline"></i> Inventory</p>
        </div>
        <div class="h25 selectable align-content-center">
          <p class="text-center m-0 "><i class="mdi mdi-hammer-screwdriver"></i> Production</p>
        </div>
        <div class="h25 selectable align-content-center">
          <p class="text-center m-0 "><i class="mdi mdi-cash-multiple"></i> Sales</p>
        </div>
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
