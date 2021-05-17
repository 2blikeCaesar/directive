<template>
  <div id="app">
    <base-input  ref="input" @entered="onEntered"></base-input>
    <PortalTarget name="test"/>
    <portal v-if="showPopup" to="test">
      <alert :show-popup="showPopup" @close="onClose"></alert>
    </portal>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import Alert from "@/components/Alert";

export default {
  name: 'App',
  components: {
    Alert,
    BaseInput,
  },
  data() {
    return {
      showPopup: false,
      focusRef: null,
    };
  },
  mounted() {
    this.$refs['input'].$refs['input'].focus();
  },
  methods: {
    onEntered() {
      this.focusRef = this.$refs['input'];
      this.showPopup = true;
    },
    onClose() {
      this.focusRef.$refs['input'].focus();
      this.showPopup = false;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
