<script>
export default {
    name: "Posts",
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        fetchPosts() {
            // You should remember how Fetch API works
            // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
            fetch(`http://localhost:3000/api/posts/`)
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message));
        },
        deleteAllPosts() {
            // using Fetch - delete method - delets a specific post based on the passed id
            fetch(`http://localhost:3000/api/posts`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data.message);
                    this.posts = [];
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        // call fetchPosts() when this element (AllPosts) mounts
        this.fetchPosts();
        console.log("mounted");
    },
};
</script>

<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <a class="post" :href="'/apost/' + post.id">
        <div class="data">
          <span>
            <img
                src="../assets/human-icon-symbol-design-illustration-vector.jpg"
                alt="user img"
                class="user-img"
            >
            {{ post.postauthor }}
          </span>
          <p>{{ new Date(post.posttime).toLocaleString() }} </p>
        </div>
        <p class="post-body">{{ post.body }}</p>
      </a>
    </div>
  </div>
  <div class="action-buttons">
    <router-link to="/addpost" class="btn add-post">Add Post</router-link>
    <button @click="deleteAllPosts" class="btn delete-all">Delete All</button>
  </div>
</template>


<style scoped>
.posts {
    width: 40%;
    margin: 20px auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.posts > div {
    background-color: #f4f4f4;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
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

.user-img {
    height: 25px;
}

.post {
    display: block;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    overflow: hidden;
    padding: 15px;
}

.post:hover {
    background-color: #e0e0e0;
    border-radius: 15px;
}

.post-body {
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    margin-top: 10px;
    line-height: 1.5;
}

.action-buttons {
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 100%;
    margin-bottom: 30px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s ease;
    text-align: center;
    text-decoration: none;
    color: white;
}

.add-post {
    background-color: rgb(8, 110, 110);
}

.add-post:hover {
    background-color: rgb(10, 130, 130);
}

.delete-all {
    background-color: rgb(200, 50, 50);
}

.delete-all:hover {
    background-color: rgb(220, 70, 70);
}
</style>
