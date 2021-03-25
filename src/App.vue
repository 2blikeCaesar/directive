<template>
  <div id="app">
    <input-test></input-test>
  </div>
</template>

<script>
import InputTest from "@/components/InputTest";

export default {
  name: 'App',
  components: {
    InputTest,
  }
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
