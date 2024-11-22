<script setup>


</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary ps-1 pe-3">
    <router-link class="navbar-brand d-flex ms-3" :to="{ name: 'Home' }">
      <div class="container ">
        <div class="row justify-content-start align-items-center align-items-md-baseline">
          <img src="src\assets\img\Prev-Gem.svg" alt="Gem" class="img-fluid col-2 col-md-1"
            title="Goblin Inventory Management Logo">
          <div class="col-6 col-md-10">
            <p class="m-0 fs-4 fs-md-2 d-none d-md-block textshadow">Goblin Inventory Management</p>
            <p class="m-0 fs-4 fs-md-2 d-md-none d-block textshadow">G.I.M.</p>
          </div>
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
