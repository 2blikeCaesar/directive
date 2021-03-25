<template>
  <div>
    <base-input v-focus/>
    <base-input v-focus="{disabled: true}"/>
    <base-input v-focus/>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
export default {
  name: "InputTest",
  components: {BaseInput}
}
</script>

<style scoped>

</style>