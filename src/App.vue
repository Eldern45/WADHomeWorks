<template>
    <div id="app">
        <HeaderComp/>
    </div>
    <main>
        <router-view/>
    </main>
    <footer>
        <FooterComp/>
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
<style>
html {
    height: 100%;
}

body {
    font-family: Arial, sans-serif;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>