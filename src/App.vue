<template>
    <div id="header">
        <HeaderComp/>
    </div>
    <main>
        <button @click="this.$store.dispatch('resetLikes')">Reset Likes</button>
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
    height: 100%;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    margin-top: 75px;
    height: 80%;
}

#header {
  height: 10%;
}

footer {
  height: 10%;
}

</style>