<script>
import auth from "../auth";
export default {
    name: "PostsView",
    data() {
        return {
            posts: [],
            authResult: auth.authenticated()
        };
    },
    
    mounted() {
        this.fetchPosts();
        console.log("mounted");
    },
    methods: {
        fetchPosts() {
            fetch(`http://localhost:3000/api/posts/`)
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message));
        },
        deleteAllPosts() {
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
        Logout() {
          fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', 
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    }
    },
};
</script>

<template>
  <div class="posts">
    <div class="logout-button">
    <button @click="Logout"
      class="btn logout"
    >
      Logout
    </button>
  </div>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <a
        class="post"
        :href="'/apost/' + post.id"
      >
        <div class="data">
          <span>
            <img
              src="../assets/human-icon-symbol-design-illustration-vector.jpg"
              alt="user img"
              class="user-img"
            >
            {{ post.username }}
          </span>
          <p>{{ new Date(post.posttime).toLocaleString() }} </p>
        </div>
        <p class="post-body">{{ post.body }}</p>
      </a>
    </div>
  </div>
  <div class="action-buttons">
    <router-link
      to="/addpost"
      class="btn add-post"
    >
      Add Post
    </router-link>
    <button
      class="btn delete-all"
      @click="deleteAllPosts"
    >
      Delete All
    </button>
  </div>

</template>


<style scoped>

.logout-button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
}

.logout {
    background-color: rgb(255, 85, 85); /* Red color */
}
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
