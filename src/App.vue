<template>
    <div id="app">
        <HeaderComp />
    </div>
    <main>
        <router-view />
    </main>
    <footer>
        <FooterComp />
    </footer>
</template>
<script>
    import HeaderComp from '@/components/HeaderComp.vue'
    import FooterComp from '@/components/FooterComp.vue'

    export default {
        name: 'App',
        components: {
            HeaderComp,
            FooterComp
        }
    }
</script>
