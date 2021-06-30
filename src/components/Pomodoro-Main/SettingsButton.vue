<template>
    <button 
        @click="this.$emit('click')" 
        type="button" 
        class="settings-btn shadow item-main"
        >
        <slot/>
    </button>
</template>
<script>

export default ({
    name: 'SettingsButton',
})
</script>
