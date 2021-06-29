<template>
    <!--<MainPomodore/>-->
  <div class="top-buttons">
    <transition name="scale" mode="out-in">
      <button
          v-if="this.isTimerReset"
          @click="clickStart" 
          type="button" 
          class="main-btn shadow item-main">
            <i class="fas fa-plus"></i>
      </button>

      <button 
          v-else-if="!this.isTimerReset" 
          @click="togglePause" 
          type="button" 
          class="main-btn item-main"
          :class="{'pause-btn':!this.isTimerPaused, 'resume-btn':this.isTimerPaused}"
          :disabled="!this.isTimerStarted">
            <i class="fas" 
              :class="{'fa-pause': !this.isTimerPaused, 
                      'fa-play': this.isTimerPaused }"
            />
      </button>
    </transition>
  </div>

    <!-- TIMER -->
    <Timer 
      :time="getPomodoroTime" 
      :isPaused="isTimerPaused"
      :isStarted="isTimerStarted"
      :isBreak="isBreak"
      :addMin="addedMinutes"
      :isReset="isTimerReset"/>

    <!-- END TIMER -->

    <!-- BUTTONS -->


<!-- hacer $emits para esto? o ponerlo directamente en el componente timer? --->
  <DotSessions :sessions="this.sessions"/>

    <button 
        @click="clickBreak" 
        type="button" 
        class="btn btn-outline-primary item-main break-btn"
        :disabled="!this.isTimerStarted">Break</button>
    <button 
        @click="clickLongBreak" 
        type="button" 
        class="btn btn-outline-primary item-main break-btn"
        :disabled="!this.isTimerStarted">Long Break</button>
    
    <button 
        @click="clickAdd" 
        type="button" 
        class="btn btn-outline-secondary item-main add-btn"
        :disabled="!this.isTimerStarted">Add 3'</button>
    
    <!-- prueba de $emits en un boton -->
    <ResetButton :disabled="!this.isTimerStarted" @click="clickReset()">Reset</ResetButton>
    
    <button 
        @click="clickSettings"
        type="button" 
        class="settings-btn shadow item-main"><i class="fas fa-cog"></i></button>    <!-- END BUTTONS -->

</template>

<script>

/**
 * TO DO:
 * Ver de NO usar el route para cambiar de work/break y usar un watch
 */

import Timer from '@/components/Timer.vue'
import DotSessions from '@/components/DotsSessions.vue'
import  PomoTypes from '@/views/Pomodoro/types.js'
import ResetButton from "@/components/ResetButton.vue";

//import MainPomodore from '@/components/MainPomodore.vue'

export default {
  name: 'Pomodoro',
  components: {
    Timer,
    DotSessions,
    ResetButton,
  },
  data(){
    return{
      isTimerPaused: false,
      pauseMsg: 'Pause',
      addedMinutes: 0,
      isTimerReset: true,
      isTimerStarted: false,
      isBreak: false,
      sessions: 4,
    }
  },
  computed:{
    pomodoroType(){
      /**
       * Returns the route param (the pomodoro session type)
       */
      return this.$route.params.type;
    },
    getPomodoroTime(){
      /**
       * Returns time value stored in types.js file 
       * acording to the route
       */
      return PomoTypes[this.pomodoroType].time;
    }
  },
  methods:{
    clickStart(){
      this.isTimerStarted=true;
      this.isTimerReset=false;
      this.$router.push({name:'Pomodoro', params:{type:'work'}})
    },
    clickBreak(){
      this.isTimerStarted=true;
      this.isTimerReset=false;
      this.isBreak=true;
      this.$router.push({name:'Pomodoro', params:{type:'break'}})
    },
    clickLongBreak(){
      this.$router.push({name:'Pomodoro', params:{type:'long-break'}})
    },
    clickReset(){
      this.isBreak=false;
      this.isTimerStarted=false;
      this.isTimerReset = true;
    },
    clickSettings(){
      this.$router.push({name:'Settings', params:{type:'settings'}})
    },
    togglePause(){
      this.isTimerPaused = !this.isTimerPaused
    },
    clickAdd(){
      this.addedMinutes++;
    },
  },
}
</script>