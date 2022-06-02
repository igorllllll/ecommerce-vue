<template>
    <div class="home">
        <navbar />
        <toroll />
        <products />
    </div>
</template>


<script>
import navbar from '../components/Navbar.vue'
import toroll from '../components/ToRoll.vue'
import products from '../components/Produts.vue'

export default {
    name: 'home',
    components: {
        navbar,
        toroll,
        products
    }
}
</script>
