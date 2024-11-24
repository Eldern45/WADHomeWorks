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
</style>
