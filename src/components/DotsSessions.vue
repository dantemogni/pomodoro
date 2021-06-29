<template>
    <div id="dotsCycle">
    <span v-for="dot in this.sessions" 
          :key="dot" class="dot" 
          :class="{activeDot: this.cyclesNum>=dot, currentDot: this.cyclesNum===dot&&!this.isTimerPaused}"></span> 
  </div>
</template>
<script>

export default ({
    name: 'DotsSessions',
    props:{
        sessions:{
            type: Number,
            default: 4,
        }  
    }
    /**
     * TODO
     * Watch para saber los ciclos de actuales de las sesiones
     */
})
</script>
