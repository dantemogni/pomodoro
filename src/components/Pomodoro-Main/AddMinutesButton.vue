<template>  
  <button 
      @click="this.$emit('click')" 
      type="button" 
      class="btn btn-outline-secondary item-main add-btn"
      :disabled="!this.isStarted"><slot/></button>
</template>

<script>

export default ({
    name: 'addMinutesButton',
    props:{
        isStarted: {
            type:Boolean,
            default: false,
        }
    }
})

</script>