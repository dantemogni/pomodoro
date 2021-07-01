<template>
    <button 
        @click="this.$emit('click')" 
        type="button" 
        class="btn btn-danger item-main reset-btn btn-block"
        >
        <slot/>
    </button>
</template>
<script>

export default ({
    name: 'ResetButton',
})
</script>
