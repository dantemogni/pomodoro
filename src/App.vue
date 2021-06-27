<template>
    <router-view></router-view>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style>
#app {
    height:100vh;
  height: calc(var(--vh, 1vh) * 100);
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
