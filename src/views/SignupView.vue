<script>
export default {
    name: 'SignupView',
    data() {
        return {
            email: '',
            password: '',
            passwordErrors: [],
        };
    },
    computed: {
        isFormValid() {
            return this.passwordErrors.length === 0;
        },
        passwordError() {
            return this.passwordErrors.length > 0;
        }
    },
    watch: {
        password(newPassword) {
            this.validatePassword(newPassword);
        }
    },
    methods: {
        submitForm() {
            console.log("Form submitted with: ", {email: this.email, password: this.password});
        },
        validatePassword(password) {
            this.passwordErrors = [];
            if (password.length < 8 || password.length > 15) {
                this.passwordErrors.push('Password should be between 8 and 15 characters.');
            }

            if (!/[A-Z]/.test(password)) {
                this.passwordErrors.push('Password should include at least one alphabetic character.');
            }

            if (!/[0-9]/.test(password)) {
                this.passwordErrors.push('Password should include at least one numeric value');
            }

            if (!/_/.test(password)) {
                this.passwordErrors.push('Password should include the character "_"');
            }
        }
    }
};


</script>

<template>
    <div class="page-container">
    <form @submit.prevent="submitForm" class="signup-form">
      <div class="form-row">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="form-row">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <div v-if="passwordError" class="password-error">
        <p>The password is not valid:</p>
        <ul>
          <li v-for="(condition, index) in passwordErrors" :key="index">{{ condition }}</li>
        </ul>
      </div>

      <button type="submit">Sign Up</button>
    </form>
</div>
</template>

<style scoped>
    .signup-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #F3F7E1;
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
</style>
