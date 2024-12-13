<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      loginError: '',
    };
  },
  methods: {
    Login() {
      console.log('Login method called');
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((response) => {
      if (!response.ok) {
        
        return response.json().then((errorData) => {
          throw new Error(errorData.error || 'An error occurred');
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log('Login successful');
      this.$router.push('/posts');
    })
    .catch((e) => {
      console.log(e);
      this.loginError = e.message; 
    });
    },
  },
};
</script>

<template>
  <div class="page-container">
    <form class="login-form">
      <div class="form-row">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div class="form-row">
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div v-if="loginError" class="login-error">
        <p>{{ loginError }}</p>
      </div>

      <button @click.prevent="Login">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f3f7e1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

label {
  width: 100px;
  margin-right: 10px;
  font-weight: bold;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}

.login-error {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
</style>
