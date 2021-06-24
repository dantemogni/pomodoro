<template>
  <MainPomodore/>
  <Footer/>
</template>

<script>
import MainPomodore from "./components/MainPomodore.vue";
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    MainPomodore,
    Footer
  }
}
</script>

<style>
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8,1fr);
  align-items: center;
  justify-content: center;

}
</style>
