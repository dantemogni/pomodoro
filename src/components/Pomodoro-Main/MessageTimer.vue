<template>
    <span class="p-title">{{this.getMsg}}</span>
</template>
<script>

export default ({
    name: 'MessageTimer',
    props:{
        isPaused:{
            type: Boolean,
            default: false,
        },
        isStarted:{
            type: Boolean,
            default: false,
        },
        isBreak:{
            type: Boolean,
            default: false,
        },
    },
    computed:{
        getMsg(){
            if (this.$props.isPaused){
                return 'TIMER PAUSED';
            } else if (!this.$props.isStarted){
                return 'POMODORO TIMER';
            } else if (!this.$props.isPaused && !this.$props.isBreak){
                return 'TIMER RUNNING'
            } else if(this.$props.isBreak && !this.$props.isPaused){
                return 'ENJOY YOUR BREAK :)'
            }
        }
    }
})
</script>
<style>
.p-title{
    font-size: 0.7em;
    margin-top: 15px;
}
</style>