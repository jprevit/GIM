<script setup>

</script>


<template>
    <div class="col-2 bg-secondary text-light fs-5 p-0 d-flex flex-column justify-content-around height textshadow">
        <router-link class="justify-content-center align-content-center text-center navlink row me-0"
            :to="{ name: 'Receiving' }" title="Receiving">
            <i class="mdi mdi-truck col-8 fs-4"></i>
            <p class="m-0 d-none d-md-flex col-8 justify-content-center">Receiving</p>
        </router-link>
        <router-link class="justify-content-center align-content-center text-center navlink row me-0"
            :to="{ name: 'Inventory' }" title="Inventory">
            <i class="mdi mdi-treasure-chest col-8 fs-4"></i>
            <p class="m-0 d-none d-md-flex col-8 justify-content-center">Inventory</p>
        </router-link>
        <router-link class="justify-content-center align-content-center text-center navlink row me-0"
            :to="{ name: 'Production' }" title="Production">
            <i class="mdi mdi-hammer-screwdriver col-8 fs-4"></i>
            <p class="m-0 d-none d-md-flex col-8 justify-content-center">Production</p>
        </router-link>
        <router-link class="justify-content-center align-content-center text-center navlink row me-0"
            :to="{ name: 'Sales' }" title="Sales">
            <i class="mdi mdi-cash-multiple col-8 fs-4"></i>
            <p class="m-0 d-none d-md-flex col-8 justify-content-center">Sales</p>
        </router-link>
    </div>
</template>


<style lang="scss" scoped>
.navlink {
    height: 25%;
    color: #f8f9fd;
    text-decoration: none;
}

.navlink:hover {
    background-color: #5882aa;
    border: 1px solid;
    border-color: #f8f9fd;
    transition: ease-out 1s;
}
</style>