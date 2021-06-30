<template>  
  <div class="top-buttons">
    <transition name="scale" mode="out-in">
      <button
          v-if="!isStarted"
          @click="this.$emit('start')" 
          type="button" 
          class="main-btn shadow item-main">
            <i class="fas fa-plus"></i>
      </button>

      <button 
          v-else-if="isStarted" 
          @click="this.$emit('pause')" 
          type="button" 
          class="main-btn item-main"
          :class="{'pause-btn':!isPaused, 'resume-btn':isPaused}">
            <i class="fas" 
              :class="{'fa-pause': !isPaused, 
                      'fa-play': isPaused }"
            />
      </button>
    </transition>
  </div>
</template>

<script>

export default ({
    name: 'ControlButton',
    props:{
        isPaused:{
            type: Boolean,
            default: false
        },
        isStarted: {
            type:Boolean,
            default: false,
        }
    },
    emits: ['start', 'pause']
})

</script>