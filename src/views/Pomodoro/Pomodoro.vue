<template>
  <!--Buttons Sounds -->
  <audio id="audioStart"><source src="@/assets/start.mp3" type="audio/mpeg"></audio>
  <audio id="audioPause"><source src="@/assets/pause.mp3" type="audio/mpeg"></audio>
  <audio id="audioReset"><source src="@/assets/reset.mp3" type="audio/mpeg"></audio>
  <!--<audio id="audioNoti"><source src="@/assets/notificationBell.wav" type="audio/wav"></audio>-->

  <div class="top-buttons">
    <transition name="scale" mode="out-in">
      <button
          v-if="!isTimerStarted"
          @click="clickStart" 
          type="button" 
          class="main-btn shadow item-main">
            <i class="fas fa-plus"></i>
      </button>

      <button 
          v-else-if="isTimerStarted" 
          @click="togglePause" 
          type="button" 
          class="main-btn item-main"
          :class="{'pause-btn':!isTimerPaused, 'resume-btn':isTimerPaused}">
            <i class="fas" 
              :class="{'fa-pause': !isTimerPaused, 
                      'fa-play': isTimerPaused }"
            />
      </button>
    </transition>
  </div>

    <!-- TIMER -->
    <Timer 
      :time="getPomodoroTime" 
      :isPaused="isTimerPaused"
      :isStarted="isTimerStarted"
      :isBreak="isTimerOnBreak"
      :addMin="getAddedMinutes"
      :isReset="!isTimerStarted"
      :sessionsComplete="getUpdatedSessions"
      @triggerNewType="changeType"/>
    <!-- END TIMER -->

    <!-- BUTTONS -->
  <DotSessions 
    :sessions="getSessions"
    :finishedSessions="getUpdatedSessions"
    :isPaused="isTimerPaused"/>

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
        class="settings-btn shadow item-main"><i class="fas fa-cog"></i></button>    
    <!-- END BUTTONS -->

</template>

<script>

import Timer from '@/components/Timer.vue'
import DotSessions from '@/components/DotsSessions.vue'
import ResetButton from "@/components/ResetButton.vue";

export default {
  name: 'Pomodoro',
  components: {
    Timer,
    DotSessions,
    ResetButton,
  },
  data(){
    return{
      isPaused: false,
      addedMinutes: 0,
      isBreak: false,
      finishedCycles:0,
      timer: null,
      info:{
        WORK: 25,
        BREAK: 5,
        LONG_BREAK:15,
      }
    }
  },
  computed:{
    getPomodoroTime(){
      /**
       * Returns time value stored in types.js file 
       * acording to the route
       */
      switch(this.timer){
        case this.info.WORK:
          return (typeof this.$route.query.min === 'undefined') ? 0.1 : parseInt(this.$route.query.min);
        case this.info.BREAK:
         return (typeof this.$route.query.sbr === 'undefined') ? 0.2 : parseInt(this.$route.query.sbr);
        case this.info.LONG_BREAK:
          return (typeof this.$route.query.lbr === 'undefined') ? 0.3 : parseInt(this.$route.query.lbr);
        default:
          return (typeof this.$route.query.min === 'undefined') ? 25 : parseInt(this.$route.query.min);
      }
    },
    isTimerStarted(){
      return this.timer!=null
    },
    isTimerPaused(){
      return this.isPaused;
    },
    isTimerOnBreak(){
      return this.isBreak;
    },
    getSessions(){
      return (typeof this.$route.query.ses === 'undefined') ? 4 : parseInt(this.$route.query.ses);
    },
    getAddedMinutes(){
      return this.addedMinutes;
    },
    getUpdatedSessions(){
      return this.finishedCycles;
    }
  },
  methods:{
    changeType(value){
      /**
       * Changes the timer type (work, short break, long break)
       * If current type is long break, it's the last one 'till reset
       */
      if(this.finishedCycles<this.getSessions){
        if(!value){
          this.clickBreak();
        } else{
          this.clickStart();
        }
      } else if(!value) {
        this.clickLongBreak();
      } else{
        this.clickReset();
      }
      
    },
    clickStart(){
      /**
       * Handles start of the timer
       */
      const audio = document.getElementById("audioStart"); 
      audio.play();
      this.finishedCycles++;
      this.isBreak = false;
      this.timer = this.info.WORK;
    },
    /**
     * Handles short break
     */
    clickBreak(){
      this.isBreak=true;
      this.timer = this.info.BREAK;
    },
    /**
     * Handles long break
     */
    clickLongBreak(){
      this.isBreak=true;
      this.timer = this.info.LONG_BREAK;
    },
    /**
     * Handles reset
     * Stops the timer and defaults info
     */
    clickReset(){
      const audio = document.getElementById("audioReset"); 
      audio.play();

      this.isBreak=false;
      this.finishedCycles=0;
      this.timer=null;
    },
    /**
     * Changes view to settings
     */
    clickSettings(){
      this.$router.push({name:'Settings', params:{type:'settings'}})
    },
    /**
     * Toggles between Pause/resume options
     */
    togglePause(){
      const audioPause = document.getElementById("audioPause"); 
      const audioResume = document.getElementById("audioStart"); 
      this.isPaused ? audioResume.play() : audioPause.play();

      this.isPaused = !this.isPaused;
    },
    /**
     * Handles adding more minutes to the timer
     */
    clickAdd(){
      this.addedMinutes++;
    },
  },
}
</script>