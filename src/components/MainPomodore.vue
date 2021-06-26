<template>
    <audio id="audioStart"><source src="@/assets/start.mp3" type="audio/mpeg"></audio>
    <audio id="audioPause"><source src="@/assets/pause.mp3" type="audio/mpeg"></audio>
    <audio id="audioReset"><source src="@/assets/reset.mp3" type="audio/mpeg"></audio>
    <transition appear name="bounce">
        <div class="main shadow" 
            :class="{
                resume: this.isTimerPaused&&!this.isTimerReset&&!this.isTimerBreak, 
                pause: !this.isTimerPaused&&!this.isTimerReset&&!this.isTimerBreak,
                break: this.isTimerBreak&&!this.isTimerReset}">

        <div id="timerClock">
            <span class="p-title">{{msg}}</span>
            <div class="p-clock">
                <span>{{minutes}}</span>
                <span>:</span>
                <span>{{seconds}}</span>
            </div>
            <div id="dotsCycle">
                <span class="dot" :class="{activeDot: this.cyclesNum>0, currentDot: this.cyclesNum===1&&!this.isTimerPaused}"></span>
                <span class="dot" :class="{activeDot: this.cyclesNum>1, currentDot: this.cyclesNum===2&&!this.isTimerPaused}"></span>
                <span class="dot" :class="{activeDot: this.cyclesNum>2, currentDot: this.cyclesNum===3&&!this.isTimerPaused}"></span>
                <span class="dot" :class="{activeDot: this.cyclesNum>3, currentDot: this.cyclesNum===4&&!this.isTimerPaused}"></span>
            </div>
        </div>
       <transition name="fade" mode="out-in">
            <button 
                v-if="this.isTimerReset" 
                @click="handleStart" 
                type="button" 
                class="btn btn-primary item-main start-p">Start</button>
            <button 
                v-else-if="!this.isTimerReset && !this.isTimerPaused" 
                @click="handlePause" 
                type="button" 
                class="btn btn-success item-main start-p">Pause</button>
            <button 
                v-else-if="this.isTimerPaused && !this.isTimerReset" 
                @click="handleResume" 
                type="button" 
                class="btn btn-warning item-main start-p">Resume</button>
        </transition>
        <button 
            @click="handleShortBreak" 
            type="button" 
            class="btn btn-outline-secondary item-main s-break" 
            :disabled="!this.isTimerStarted">Short Break</button>
        <button 
            @click="handleLongBreak" 
            type="button" 
            class="btn btn-outline-secondary item-main l-break" 
            :disabled="!this.isTimerStarted">Long Break</button>
        <button 
            @click="handleAdd" 
            type="button" 
            class="btn btn-outline-secondary item-main add-five" 
            :disabled="!this.isTimerStarted">Add 5'</button>
        <button 
            @click="handleReset" 
            type="button" 
            class="btn btn-outline-danger item-main stop-p" 
            :disabled="!this.isTimerStarted">Reset</button>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'MainPomodore',
  data(){
      return {
          timer: null,
          remaingTime: 60*25,
          isTimerReset: true,
          isTimerStarted: false,
          isTimerPaused: false,
          isTimerBreak: false,
          isSBreak:false,
          isLBreak:false,
          cyclesNum:0,
          msg:"POMODORO TIMER",
          msgSBreak:"ENJOY YOUR SHORT BREAK :)",
          msgLBreak:"ENJOY YOUR LONG BREAK :) GO OUTSIDE, DRINK SOME WATER",
      }
  },
  computed:{
    minutes: function(){
        const minutes = Math.floor(this.remaingTime/60);
        if(minutes>=10) return minutes
        else return '0' + minutes;
    },
    seconds: function(){
        const seconds = this.remaingTime - (this.minutes*60);
        if(seconds>=10) return seconds
        else return '0' + seconds;
    }, 
},
  methods:{

    handleStart: function(){
        var x = document.getElementById("audioStart"); 
        x.play();
        if(this.cyclesNum>2){
            this.runTimer(25, this.handleLongBreak);
        } else{
            this.runTimer(25, this.handleShortBreak);
        }
    
        this.isTimerReset = false;
        this.msg="TIMER RUNNING";
        this.isTimerPaused= false;
        this.isTimerBreak=false;
        this.isSBreak=false;
        this.isLBreak=false;
        this.isTimerStarted=true;
        this.cyclesNum++;
    },

    runTimer:function(minutes, callback){
        this.remaingTime= 60*minutes;
        clearInterval(this.timer);
        this.timer = setInterval(()=>this.decreaseTimer(callback),1000);
    },
    
    decreaseTimer: function(callback){
        if(this.remaingTime>=1){
            this.remaingTime--;
        } else{
            this.remaingTime = 0;
            callback();
        }
    },
    
    handleAdd: function(){
        this.remaingTime+=60*5;
    },

    handlePause: function(){
        clearInterval(this.timer);
        this.isTimerPaused = true;
        this.timer = null;
        var x = document.getElementById("audioPause"); 
        x.play();
        this.msg="TIMER PAUSED";
    },

    handleResume: function(){
        if(this.isSBreak){
            this.timer = setInterval(()=>this.decreaseTimer(this.handleStart),1000);
        } else if(this.isLBreak){
            this.timer = setInterval(()=>this.decreaseTimer(this.handleReset),1000);
        } else if(this.cyclesNum>3){
            this.timer = setInterval(()=>this.decreaseTimer(this.handleLongBreak),1000);
        } else{
            this.timer = setInterval(()=>this.decreaseTimer(this.handleShortBreak),1000);
        }
        var x = document.getElementById("audioStart"); 
        x.play();
        this.isTimerPaused = false;
        if(!this.isTimerBreak){
            this.msg="TIMER RUNNING";
        } else if(this.isSBreak){
            this.msg=this.msgSBreak;
        } else if(this.isLBreak){
            this.msg=this.msgLBreak;
        }
    },

    handleReset: function(){
        clearInterval(this.timer);
        var x = document.getElementById("audioReset"); 
        x.play();
        this.remaingTime = 60*25;
        this.isTimerReset = true;
        this.isTimerStarted = false;
        this.isTimerPaused= false;
        this.isTimerBreak=false;
        this.timer=null;
        this.isSBreak=false;
        this.isLBreak=false;
        this.cyclesNum = 0;
        this.msg="POMODORO TIMER";
    },

    handleLongBreak: function(){
        this.runTimer(15, this.handleReset);
        this.isTimerBreak=true;
        this.isLBreak=true;
        this.isSBreak=false;
        this.isTimerPaused = false;
        this.msg=this.msgLBreak;
    },

    handleShortBreak: function(){
        this.runTimer(5, this.handleStart);
        this.isTimerPaused = false;
        this.isTimerBreak=true;
        this.isSBreak=true;
        this.isLBreak=false;
        this.msg=this.msgSBreak;
    }
  }
}
</script>
<style>
.dot {
  height: 10px;
  width: 10px;
  background-color: rgb(175, 175, 175);
  border-radius: 50%;
  margin: 5px;
transition: all 0.5s ease-in;
  display: inline-block;
}
.activeDot{
    background-color: rgb(85, 85, 85) !important;
}
.currentDot{
    animation: currentD 1s ease-in infinite;
}

@keyframes currentD{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        opacity: 1;
    }
}
.pause{
    background-color: rgba(0, 255, 34, 0.171) !important;
    transition: all 0.5s ease-in;
}
.resume{
    background-color: rgba(255, 230, 0, 0.171) !important;
    transition: all 0.5s ease-in;
}
.break{
    background-color: rgba(0, 238, 255, 0.171) !important;
    transition: all 0.5s ease-in;
}
.p-title{
    font-size: 0.7em;
}
.p-cycle{
    font-size: 0.9em;
}
.p-clock{
    font-size: 4em;
    display: block;
}
.main{
    margin: 0 auto;
    grid-column: 2 / -2;
    grid-row: 2 / -2;
    max-width: 450px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 15px;
    border-radius: 15px;
    padding: 30px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
}
.add-five, .stop-p, .l-break, .s-break{
    flex: 1 3 30%;
}
.start-p{
    flex: 1 1 100%;
}
.bounce-enter-active {
  animation: bounce-in 0.6s;
}
.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.1;
}

</style>