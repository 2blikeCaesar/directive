<template>
  <div>
    <input :inputmode="inputMode"
           ref="input"
           @touchstart="onTouch"
           @keyup.enter="onEnter">
  </div>
</template>

<script>
export default {
  name: "InputTest",
  mounted() {
    this.$refs['input'].focus();
  },
  data() {
    return {
      inputClicked: false,
      inputMode: 'none',
    };
  },
  methods: {
    onEnter() {
      this.inputMode = 'none';
      this.$emit('entered');
    },
    onTouch() {
      if (this.inputMode === 'none') {
        this.inputMode = 'search';
      }
    },
  },
}
</script>

<style scoped>

</style>