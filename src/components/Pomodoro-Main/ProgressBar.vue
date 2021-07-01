<template>
    <div class="progress" style="width: 100%">
        <div class="progress-bar progress-bar-striped" :class="{'progress-bar-animated': !getPaused}" role="progressbar" :style="{width: getProg+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <span>{{progressMsg}}</span>
        </div>
    </div>
</template>

<script>

export default ({
    name: 'ProgressBar',
    props:{
        progress:{
            type: Number,
            default: 0,
        },
        isBreak:{
            type: Boolean,
            default: false,
        },
        isPaused:{
            type: Boolean,
            default: false,
        },
    },
    computed:{
        getProg(){
            return this.progress;
        },
        getBreak(){
            return this.isBreak;
        },
        getPaused(){
            return this.isPaused;
        },
        progressMsg(){
            if(!this.getBreak){
                if(this.getProg>40&&this.getProg<60){
                    return 'Halfway ;)'
                } else if(this.getProg>75&&this.getProg<95){
                    return 'Almost there! Keep it up!'
                } else if(this.getProg>=95){
                    return 'You did it!'
                }
            } else{
                if(this.getProg>75){
                    return 'Break is almost over!'
                }
            }
            return ''
        }
    },

})
</script>
<style>
</style>