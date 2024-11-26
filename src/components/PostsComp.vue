<script>
export default {
    name: 'PostsComp',
    props: {},
    computed: {
        postList() {
            return this.$store.state.posts
        }
    },
    methods: {}
}
</script>

<template>
  <div class="posts">
    <div
      v-for="(post, index) in postList"
      :key="post.id"
    >
      <div class="data">
        <span>
          <img
            src="../assets/human-icon-symbol-design-illustration-vector.jpg"
            alt="user img"
            class="user-img"
          >
          {{ post.authorName }}
        </span>
        <p>{{ new Date(post.createTime).toLocaleString() }} </p>
      </div>
      <img
        v-if="post.pictureUrl != null"
        :src="post.pictureUrl"
        alt="Post image"
        class="post-img"
      >
      <p>{{ post.text }}</p>
      <span class="like-container">
        <img
          src="../assets/like-button.png"
          alt="like-button"
          class="like-button"
          @click="$store.dispatch('increaseLikes', index)"
        >
        {{ post.likes + " likes" }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.posts {
    margin-top: 20px;
}

.like-button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 8px;
}

.like-button:hover {
    opacity: 0.8;
    transform: scale(1.05);
}

.posts > div {
    background-color: #f4f4f4;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
}

.data {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.data > span {
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 10px;
}

.post-img {
    max-width: 60%;
    margin: auto;
    border-radius: 15px;
}

.user-img {
    height: 25px;
}

.like-container {
    justify-content: space-between;
    display: flex;
}
</style>