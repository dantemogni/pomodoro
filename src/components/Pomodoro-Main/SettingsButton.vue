<template>
    <button 
        @click="this.$emit('toggle')" 
        type="button" 
        class="btn btn-settings btn-outline-secondary btn-sm btn-block"
        >
        <slot/>
    </button>
</template>
<script>

export default ({
    name: 'SettingsButton',
    emits:['toggle']
})
</script>
