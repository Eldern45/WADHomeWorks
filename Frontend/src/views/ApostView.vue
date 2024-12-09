<script>
export default {
    name: "ApostView",
    data() {
        return {
            post: {
                id: "",
                body: "",
                posttime: "",
                username: ""
            },
            isBodyEmpty: false,
        };
    },
    mounted() {
        this.fetchAPost(this.$route.params.id);
    },
    methods: {
        fetchAPost(id) {
            fetch(`http://localhost:3000/api/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
        updatePost() {
            if (!this.post.body.trim()) {
                this.isBodyEmpty = true;
                return;
            } else {
                this.isBodyEmpty = false;
            }
            this.post.posttime = new Date();

            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/posts");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deletePost() {
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/posts");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
}
</script>

<template>
  <div class="apost-view">
    <div class="form-container">
      <h2>A Post</h2>

      <div class="form-group">
        <label for="body">Body</label>
        <input
          id="body"
          v-model="post.body"
          type="text"
          required
        >
      </div>

      <div
        v-if="isBodyEmpty"
        class="error-message"
      >
        Body cannot be empty
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input
          id="author"
          v-model="post.username"
          type="text"
          required
        >
      </div>

      <div class="buttons">
        <button
          class="update-post"
          @click="updatePost"
        >
          Update
        </button>
        <button
          class="delete-post"
          @click="deletePost"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apost-view {
    width: 30%;
    margin: 20px auto 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-container {
    background-color: #f4f4f4;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

h2 {
    text-align: center;
    color: rgb(8, 110, 110);
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.form-group label {
    width: 100px;
    color: rgb(8, 110, 110);
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    margin-right: 10px;
}

.form-group input {
    flex: 1;
    padding: 10px 6px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: #333;
    background-color: white;
    outline: none;
    transition: border-color 0.3s ease;
}

.form-group input:focus {
    border-color: rgb(8, 110, 110);
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 75px;
    width: 100%;
}

button {
    background: rgb(8, 110, 110);
    padding: 10px 25px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s ease;
    text-align: center;
    text-decoration: none;
    color: white;
}

button:hover {
    background: rgb(10, 130, 130);
}

.delete-post {
    background: rgb(200, 50, 50);
}

.delete-post:hover {
    background: rgb(220, 70, 70);
}

.error-message {
    color: red;
    font-size: 0.9em;
    margin-bottom: 10px;
    margin-left: 115px;
}
</style>