<template>  
  <button 
      @click="this.$emit('short')" 
      type="button" 
      class="btn btn-outline-primary item-main break-btn"
      :disabled="!this.isStarted">Break</button>
  <button 
      @click="this.$emit('long')" 
      type="button" 
      class="btn btn-outline-primary item-main break-btn"
      :disabled="!this.isStarted">Long Break</button>
</template>

<script>

export default ({
    name: 'SettingsButton',
    props:{
        isStarted: {
            type:Boolean,
            default: false,
        }
    },
    emits:['short', 'long']
})
</script>