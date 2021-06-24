<template>
    <div class="footer fixed-bottom d-flex flex-row justify-content-center align-items-center">
        <span>Diseñado con 💙 por <a :href="this.authorLink" :alt="this.alt">{{this.author}}</a>.</span>
    </div>
</template>

<script>
export default {
  name: 'MainPomodore',
  data(){
      return{
        author: "Dante Mogni",
        authorLink: "https://github.com/dantemogni/",
        alt: "GitHub",
      }
  }
}
</script>
<style>
.footer a{
    text-decoration: none;
}
.footer{
    bottom: 10px;
    font-size: 0.9em;
}
</style>