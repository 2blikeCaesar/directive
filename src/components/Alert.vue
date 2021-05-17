<template>
  <div class="dialog" v-if="showPopup" @click.stop="onClickClose">
    <div class="target">
      <button class="button" @click="onClickClose"></button>
      <div tabindex="0" ref="focus"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    showPopup: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$refs['focus'].focus();
  },
  methods: {
    onClickClose() {
      this.$emit('close');
    },
  }
}
</script>

<style scoped lang="scss">
  .dialog{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
  }

  .target {
    width: 500px;
    height: 100%;
    background: white;
  }
  .button {
    width: 400px;
    height: 200px;
  }

</style>