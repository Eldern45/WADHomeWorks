<script>
export default {
  name: 'ContactUsView',
  data() {
    return {
      contacts: [
        {
          name: 'Johan Veenpere',
          phone: '+372666666',
          email: '@gmail.com',
        },
        {
          name: 'Timofei Šinšakov',
          phone: '+3725555555',
          email: '@outlook.com',
        },
        {
          name: 'Timur Sirazitdinov',
          phone: '+37244444444',
          email: '@example.com',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="page-container">
    <h2>Contact Us</h2>
    <div v-for="(contact, index) in contacts" :key="index" class="contact-card">
      <h3>{{ contact.name }}</h3>
      <p><strong>Phone:</strong> {{ contact.phone }}</p>
      <p><strong>Email:</strong> <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

h2 {
  margin-bottom: 30px;
  font-size: 2em;
  text-align: center;
}

.contact-card {
  background-color: #f3f7e1;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-card h3 {
  margin-bottom: 10px;
  font-size: 1.4em;
}

.contact-card p {
  margin: 5px 0;
}

a {
  color: blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
