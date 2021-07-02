<template>
  <!--Buttons Sounds -->
  <audio id="audioStart"><source src="@/assets/start.mp3" type="audio/mpeg"></audio>
  <audio id="audioPause"><source src="@/assets/pause.mp3" type="audio/mpeg"></audio>
  <audio id="audioReset"><source src="@/assets/reset.mp3" type="audio/mpeg"></audio>

  <!-- POMODORO -->
  <transition
      appear
      enter-active-class="animate__animated animate__faster animate__fadeInDown"
      leave-active-class="animate__animated animate__faster animate__fadeOutUp"
      mode="out-in">
        <section v-if="this.view==='Pomodoro'" 
          class="main shadow pomodoroContent"
          :class="{break: isTimerOnBreak}">

          <!-- START/PAUSE/RESUME BUTTONS -->
          <ControlButtons 
            :isPaused="isTimerPaused"
            :isStarted="isTimerStarted" 
            @start="clickStart" 
            @pause="togglePause"/>

          <MessageTimer 
            :isPaused="isTimerPaused"
            :isStarted="isTimerStarted"
            :isBreak="isTimerOnBreak"/>

          <!-- POMODORO TIMER -->
          <Timer 
            :time="getPomodoroTime" 
            :isPaused="isTimerPaused"
            :isStarted="isTimerStarted"
            :isBreak="isTimerOnBreak"
            :addMin="getAddedMinutes"
            :isReset="!isTimerStarted"
            :sessionsComplete="getUpdatedSessions"
            @triggerNewType="changeType"
            @updateProgressBar="calculateProgress"/>


          <!-- SESSIONS INDICATOR -->
          <DotSessions 
            :sessions="getSessions"
            :finishedSessions="getUpdatedSessions"
            :isPaused="isTimerPaused"/>

            <ProgressBar
              :isPaused="isTimerPaused"
              :isBreak="isTimerOnBreak"
              :progress="getProgress"/>

          <!-- BREAK BUTTONS -->
          <ForceBreakButtons
            :isStarted="isTimerStarted"
            @short="clickBreak"
            @long="clickLongBreak"/>
            
          <AddMinutesButton :isStarted="isTimerStarted" @click="clickAdd"> Add 3' </AddMinutesButton>

          <ResetButton :disabled="!isTimerStarted" @click="clickReset"> Reset </ResetButton>
        </section>
          <Settings v-else-if="this.view==='Settings'" @settingsApplied="toggleViews"></Settings>
  </transition>
  
  <transition
    appear
    enter-active-class="animate__animated animate__faster animate__fadeInDown"
    leave-active-class="animate__animated animate__faster animate__fadeOutUp"
    mode="out-in">

    <SettingsButton :disabled="isTimerStarted" v-if="this.view==='Pomodoro'" @toggle="toggleViews">Settings</SettingsButton>
    
    <button 
      v-else-if="this.view==='Settings'"
      @click="toggleViews"
      type="button" 
      class="settings-btn shadow item-main"><i class="fas fa-arrow-left"></i></button>

    </transition>

</template>

<script>

import MessageTimer from '@/components/Pomodoro-Main/MessageTimer.vue'
import Timer from '@/components/Pomodoro-Main/Timer.vue'
import DotSessions from '@/components/Pomodoro-Main/DotsSessions.vue'
import ControlButtons from '@/components/Pomodoro-Main/ControlButtons.vue'
import ForceBreakButtons from '@/components/Pomodoro-Main/ForceBreakButtons.vue'
import AddMinutesButton from '@/components/Pomodoro-Main/AddMinutesButton.vue'
import ResetButton from "@/components/Pomodoro-Main/ResetButton.vue"
import Settings from '@/components/SettingsComponent.vue'
import SettingsButton from "@/components/Pomodoro-Main/SettingsButton.vue"
import ProgressBar from '@/components/Pomodoro-Main/ProgressBar.vue'

export default {
  name: 'Pomodoro',
  components: {
    MessageTimer,
    Timer,
    DotSessions,
    ControlButtons,
    ForceBreakButtons,
    AddMinutesButton,
    Settings,
    SettingsButton,
    ResetButton,
    ProgressBar,
  },
  data(){
    return{
      progress:null,
      isPaused: false,
      addedMinutes: 0,
      isBreak: false,
      finishedCycles:0,
      timer: null,
      isNotificationGranted:false,
      view: "Pomodoro",
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
          return (this.$route.query.min === undefined) ? 0.1 : parseInt(this.$route.query.min);
        case this.info.BREAK:
          return (this.$route.query.sbr === undefined) ? 1 : parseInt(this.$route.query.sbr);
        case this.info.LONG_BREAK:
          return (this.$route.query.lbr === undefined) ? 0.1 : parseInt(this.$route.query.lbr);
        default:
          return (this.$route.query.min === undefined) ? this.info.WORK : parseInt(this.$route.query.min);
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
      return (this.$route.query.ses === undefined) ? 4 : parseInt(this.$route.query.ses);
    },
    getAddedMinutes(){
      return this.addedMinutes;
    },
    getUpdatedSessions(){
      return this.finishedCycles;
    },
    getProgress(){
      return this.progress;
    }
  },
  methods:{
    toggleViews(){
      this.view==='Pomodoro' ? this.view='Settings' : this.view='Pomodoro'
    },
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
      this.showNotification("Back to work");
      Notification.requestPermission().then(permission => {
         if(permission==='granted'){
           this.isNotificationGranted=true;
          }
      });
    },
    /**
     * Handles short break
     */
    clickBreak(){
      this.isBreak=true;
      this.timer = this.info.BREAK;
      this.showNotification("Break has started. Enjoy :)");
    },
    /**
     * Handles long break
     */
    clickLongBreak(){
      this.isBreak=true;
      this.timer = this.info.LONG_BREAK;
      this.showNotification("Long break has started. Go outside, drink some water :)");
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
      this.isPaused=false;
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
    calculateProgress(time, currentTime){
      this.progress = (((currentTime-time)*-1)*100)/time;
    },
    showNotification(msg){
      if(this.isNotificationGranted){
        new Notification("Pomodoro Timer", {body: msg,})
      }
    },
  },
}
</script>