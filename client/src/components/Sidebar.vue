<script setup>

</script>


<template>
    <div class="col-2 bg-secondary text-light fs-4 p-0 d-flex flex-column justify-content-around height">
        <router-link class="h25 selectable align-content-center navlink" :to="{ name: 'Receiving' }">
            <p class="text-center m-0"><i class="mdi mdi-truck"></i> Receiving</p>
        </router-link>
        <router-link class="h25 selectable align-content-center navlink" :to="{ name: 'Inventory' }">
            <div class="h25 selectable align-content-center">
                <p class="text-center m-0 "><i class="mdi mdi-treasure-chest"></i> Inventory</p>
            </div>
        </router-link>
        <router-link class="h25 selectable align-content-center navlink" :to="{ name: 'Receiving' }">
            <div class="h25 selectable align-content-center">
                <p class="text-center m-0 "><i class="mdi mdi-hammer-screwdriver"></i> Production</p>
            </div>
        </router-link>
        <router-link class="h25 selectable align-content-center navlink" :to="{ name: 'Receiving' }">
            <div class="h25 selectable align-content-center">
                <p class="text-center m-0 "><i class="mdi mdi-cash-multiple"></i> Sales</p>
            </div>
        </router-link>
    </div>
</template>


<style lang="scss" scoped>
.navlink {
    color: #f8f9fd;
    text-decoration: none;
}
</style>