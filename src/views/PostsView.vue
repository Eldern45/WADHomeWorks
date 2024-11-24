<script>
import Posts from "@/components/PostsComp.vue";

export default {
    name: 'PostsView',
    components: {Posts}
}
</script>

<template>
    <div class="main">
        <Posts/>
        <button @click="this.$store.dispatch('resetLikes')">Reset Likes</button>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

button {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;
    font-size: 1rem;
    outline: none;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s, -webkit-box-shadow .2s;
    white-space: nowrap;
    border: none;
}

button:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}
</style>
