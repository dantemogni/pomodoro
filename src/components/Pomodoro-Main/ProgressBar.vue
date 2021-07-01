<template>
    <div class="progress" style="width: 100%;height:10px">
        <div class="progress-bar" role="progressbar" :style="{width: getProg+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
    },
    computed:{
        getProg(){
            return this.progress;
        }
    }
})
</script>
<style>
</style>