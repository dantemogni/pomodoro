<template>
    <div class="settings main shadow">
    <div class="input-group  mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Minutes</span>
        </div>
        <input v-model="minutesConfig" type="number" id="minutesInput" class="form-control" placeholder="Default: 24" aria-label="minutes" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Sessions</span>
            </div>
        <input v-model="sessionConfig" type="number" id="sessionInput" class="form-control" placeholder="Default: 4" aria-label="sessions" aria-describedby="basic-addon2">
        </div>
    </div>
</template>
<style>
.settings{
    justify-content: left;
    text-align: left;
}
</style>
<script>
export default {
    data(){
        return{
            minutesConfig:'',
            sessionConfig:'',
        }
    }
}
</script>
