<template>
    <button 
        @click="this.$emit('click')" 
        type="button" 
        class="btn btn-danger item-main reset-btn"
        >
        <slot/>
    </button>
</template>
<script>

export default ({
    name: 'ResetButton',
})
</script>
