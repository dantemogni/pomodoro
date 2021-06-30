<template>
    <div id="dotsCycle">
    <span v-for="dot in sessions" 
          :key="dot" class="dot" 
          :class="{activeDot: finishedSessions>=dot, currentDot: finishedSessions===dot&&!isPaused}"></span> 
  </div>
</template>
<script>

export default ({
    name: 'DotsSessions',
    props:{
        sessions:{
            type: Number,
            default: 4,
        },
        finishedSessions:{
            type: Number,
            default: 0,
        },
        isPaused:{
            type: Boolean,
            default: false,
        }  
    },
    /**
     * TODO
     * Añadir un dot al final de otro color para establecer el long-break
     */
})
</script>
