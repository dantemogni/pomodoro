<template>
    <button 
        @click="this.$emit('toggle')" 
        type="button" 
        class="settings-btn shadow item-main"
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
