<script>
export default {
  name: "Posts",
  props: {},
  computed: {
    postList() {
      return this.$store.state.posts
    }
  },
  methods: {
    
  }
}
</script>

<template>
  <div class="posts">
    <div v-for="(post, index) in postList">
      <div class="data">
        <span>
          <img src="../../res/human-icon-symbol-design-illustration-vector.jpg" alt="user img" class="user-img" />
          {{post.authorName}}
        </span>
        <p>{{ post.createTime.toLocaleString() }}</p>
      </div>
      <img v-if="post.pictureUrl != null" :src="post.pictureUrl" alt="Post image" class="post-img" />
      <p>{{ post.text }}</p>
      <span><button @click="this.$store.dispatch('increaseLikes', index)">like</button> {{ post.likes }} </span>
    </div>
  </div>
</template>

<style scoped>
.posts {
  margin-top: 20px;
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

.post-img {
    max-width: 60%;
    margin: auto;
    border-radius: 15px;
}

.user-img {
  height: 25px;
}
</style>