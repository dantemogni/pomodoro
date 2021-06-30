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
        },
        sessionsComplete:{
            type: Number,
            default:0,
        }
    }, 
    data(){
        return{
            finishedCycles: 0,
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
        getFinishedSessions(){
            return this.finishedCycles;
        },
    },
    methods:{
        setTime(value){
            this.remaingTime = value * 60;
        },
        handleStart(){
            this.finishedCycles++;
            this.startCoutdown();
        },
        handlePause(){
            this.isPaused ? (this.stopCountdown(),document.title=+this.minutes+':'+this.seconds+' - Paused'): this.startCoutdown();
        },
        startCoutdown(){
            /**
             * Starts the interval, decreasing the timer by one second
             */
            this.countdown = window.setInterval(() => this.remaingTime--, 1000);
        },
        decreaseTimer(){
            this.remaingTime--;
            if(this.remaingTime===-1){
                return;
            }
        },
        stopCountdown(){
            /**
             * Stops the on-going interval and sets the coutdown to null
             */
            clearInterval(this.countdown);
            this.countdown = null;
        },
        handleReset(){
            /**
             * Resets timer
             */
            this.stopCountdown();
            this.setTime(this.$props.time);
        },
        addMinutes(value){
            /**
             * Adds the param value to the on-going timer
             */
            this.remaingTime+=60*value;
        },
            /** getFormattedTime:
             * Adds a '0' at front when value<10
             */
        getFormattedTime: (value) => value.toString().padStart(2,'0'), 
        changeDocumentTitle(){
            /**
             * Changes DOM document.title to display the current countdown
             */
            if(this.isStarted && !this.isBreak){
                document.title=this.minutes+':'+this.seconds+' - Pomodoro'
            } else if(this.isStarted && this.isBreak){
                document.title=this.minutes+':'+this.seconds+' - Break'
            } else{
                document.title='Pomodoro';
            }
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
                this.stopCountdown()
                this.handleStart();
            }
        },
        remaingTime(newValue){
            this.changeDocumentTitle();

            if(newValue===-1){
                this.$emit('triggerNewType', this.isBreak);
            }
        },
        finishedCycles(){
            this.$emit('newSession');
        },
    }
  }
</script>
<style>
.timer{
    font-size: 5em;
    flex: 1 1 100%;
}
</style>