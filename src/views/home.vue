<template>
  <div class="home-wrapper">
    <img alt="Vue logo" :src="logoImage">
    <HelloWorld msg="Welcome to Your Vue.js App >> Home"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import logoImage from '../assets/images/logo.png'

export default {
  name: 'Home',
  data() {
    return {
      logoImage: logoImage
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
.home-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
