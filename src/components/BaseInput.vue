<template>
  <div>
    <input :inputmode="inputMode"
           ref="input"
           @touchstart="onTouch"
           @focusout="onFocusOut"
           @focusin="onFocusIn"
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
      isNotFirstTouch: false,
    };
  },
  methods: {
    onEnter() {
      this.$emit('entered');
    },
    onFocusOut() {
      this.inputMode = 'none';
    },
    onFocusIn() {
      if (this.isNotFirstTouch) {
        this.inputMode = 'search';
      }
    },
    onTouch() {
      this.isNotFirstTouch = true;
      if (this.inputMode === 'none') {
        this.inputMode = 'search';
      }
    },
  },
}
</script>

<style scoped>

</style>