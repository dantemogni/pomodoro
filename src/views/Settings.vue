<template>
    <SettingsComponent />
</template>

<script>
import SettingsComponent from '@/components/SettingsComponent.vue'
export default {
  name: 'App',
  components: {
    SettingsComponent
  },
  // props:{
  //   numberOfSessions:{
  //     type: Number,
  //     default: 4,
  //   },
  //   workMinutes:{
  //     type: Number,
  //     default: 25
  //   },
  //   breakMinutes:{
  //     type: Number,
  //     default: 5
  //   },
  //   longBreakMinutes:{
  //     type: Number,
  //     default: 15
  //   }
  // }
}
</script>