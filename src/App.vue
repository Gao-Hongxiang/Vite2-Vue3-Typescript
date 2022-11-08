<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import msg from "./msg"
const arr = [1, 234, 2134, 1235]
</script>

<template>
  <HelloWorld :msg="msg.text" />
</template>

<style></style>
