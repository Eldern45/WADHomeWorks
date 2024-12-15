<script>
export default {
    name: 'NavigationBar'
}
</script>

<template>
  <header class="header">
    <nav>
      <router-link
        to="/posts"
        class="buttons"
      >
        Home
      </router-link>
      <router-link
        to="/contactus"
        class="buttons"
      >
        Contact Us
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    overflow: hidden;
    border-radius: 15px;
    height: 70px;
    font-size: 25px;
    margin: 3px;
}

.buttons {
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    margin-left: 10px;
}

.buttons:hover {
    background-color: #ddd;
    color: black;
    border-radius: 15px;
}
</style>
