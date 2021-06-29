<template>
    <section class="timer">
        <span>{{this.minutes}}:{{this.seconds}}</span>
    </section>
</template>

<script>
export default {
    name: 'Timer',
    props: {
        time: {
            type: Number,
            default: 25,
        },
        isPaused:{
            type: Boolean,
            default: false,
        },
        addMin:{
            type: Number,
            default:0,
        },
        isReset:{
            type: Boolean,
            dafault: true,
        },
        isStarted:{
            type: Boolean,
            default: false,
        },
        isBreak:{
            type: Boolean,
            default: false,
        }
    }, 
    data(){
        return{
            remaingTime: 25,
            countdown: null,
        }
    },
    mounted() {
        this.setTime(this.$props.time);
    },
    computed:{
        minutes: function(){
            const minutes = Math.floor(this.remaingTime / 60);
            return this.getFormattedTime(minutes);
        },
        seconds: function(){
            const seconds = Math.floor(this.remaingTime % 60);
            return this.getFormattedTime(seconds);
        }, 
    },
    methods:{
        setTime(value){
            this.remaingTime = value * 60;
        },
        handleStart(){
            this.countdown = window.setInterval(() => this.decreaseTimer(), 1000);
        },
        handlePause(){
            if(this.isPaused){
                this.stopCountdown();
            } else{
                this.handleStart();
            }
        },
        stopCountdown(){
            clearInterval(this.countdown);
            this.countdown = null;
        },
        handleReset(){
            this.stopCountdown();
            this.setTime(this.$props.time);
        },
        addMinutes(value){
            this.remaingTime+=60*value;
        },
        decreaseTimer: function(){
            if(this.remaingTime>=1){
                this.remaingTime--;
            } else{
                this.remaingTime = 0;
                return;
            }
        },
        getFormattedTime(value){
            /**
             * Adds a '0' at front when value<10
             */
            return value.toString().padStart(2,'0'); 
        }
    },
    watch:{
        time(newTime){
            /**
             * Watches if the time has changed (if it changed from work to break)
             */
            this.setTime(newTime);
        },
        isPaused(){
            /**
             * Watches if the user pressed 'Pause'
             */
            this.handlePause();
        },
        addMin(){
            this.addMinutes(3);
        },
        isReset(newValue){
            if(newValue){
                this.handleReset();
            }
        },
        isStarted(newValue){
             if(newValue){
                this.handleStart();
            }
        }
    }
  }
</script>
<style>
.timer{
    font-size: 5em;
    flex: 1 1 100%;
}
</style>