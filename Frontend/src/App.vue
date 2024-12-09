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

<template>
  <div id="app">
    <HeaderComp />
    <main id="main">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#main {
    flex: 1;
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