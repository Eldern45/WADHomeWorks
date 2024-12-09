<template>
  <div class="add-post-view">
    <div class="form-container">
      <h2>Add a Post</h2>

      <div class="form-group">
        <label for="body">Body</label>
        <input
            type="text"
            id="body"
            required
            v-model="post.body"
            placeholder="Enter post body"
        />
      </div>

      <div v-if="isBodyEmpty" class="error-message">
        Body cannot be empty
      </div>

      <div class="form-group">
        <label for="postauthor">Author</label>
        <input
            type="text"
            id="postauthor"
            required
            v-model="post.postauthor"
            placeholder="Enter author name"
        />
      </div>

      <div class="button-group">
        <button @click="addPost" class="btn add-post">Add Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AddPost",
    data() {
        return {
            post: {
                id: "",
                body: "",
                posttime: "",
                postauthor: ""
            },
            isBodyEmpty: false
        };
    },
    methods: {
        addPost() {
            if (!this.post.body.trim()) {
                this.isBodyEmpty = true;
                return;
            } else {
                this.isBodyEmpty = false;
            }
            let data = {
                body: this.post.body,
                postauthor: this.post.postauthor,
                posttime: new Date(),
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    console.log(response.data);
                    // redirect to /allposts view
                    this.$router.push("/posts");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
        },
    },
};
</script>

<style scoped>
.add-post-view {
    width: 30%;
    margin: 20px auto 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-container {
    background-color: #f4f4f4;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

h2 {
    text-align: center;
    color: rgb(8, 110, 110);
    margin-bottom: 20px;
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
    padding: 10px 12px;
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

.form-group input::placeholder {
    color: #aaa;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

.error-message {
    color: red;
    font-size: 0.9em;
    margin-bottom: 10px;
    margin-left: 115px;
}
</style>