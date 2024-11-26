<template>
  <HeaderComp />
  <router-view />
  <FooterComp />
</template>
<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp
    },
    mounted() {
        document.title = "Homework 3";
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
    height: 100%;
}
</style>