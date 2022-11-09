<script setup lang="ts">
import { ref } from "vue"
import style from "./HelloWorld.module.css"
import logoUrl from "@/assets/kf.jpg"
import { useMainStore, useUserStore } from "@/store"
import { storeToRefs } from "pinia"
defineProps<{ msg: string }>()
const count = ref(0)
const mainStore = useMainStore()
//const storeCount = mainStore.count
const userStore = useUserStore()
const { count: storeCount } = storeToRefs(mainStore)
const add = () => {
  //适合多字段改变
  mainStore.$patch({
    firstName: "zhang",
    lastName: "san",
    count: mainStore.count + 1
  })
}
const add2 = () => {
  //适合多字段改变
  mainStore.$patch((state) => ({
    name: "arch2",
    count: mainStore.count + 2
  }))
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <a class="scopeA">超链接</a>
    <a :class="$style.link">超链接</a>
    <a :class="style.link">超链接</a>
    <h2>less</h2>
    <h3>sass</h3>
    <div class="postcss"></div>
    <img src="@/assets/kf.jpg" style="width: 50px" />
    <img :src="logoUrl" style="width: 50px" />
    <div class="logo"></div>
  </div>

  <div>
    <p>userName {{ userStore.userName }}</p>
    <p>name:{{ mainStore.name }}</p>
    <p>count:{{ mainStore.count }}</p>
    <p>count:{{ storeCount }}</p>
    <button @click="mainStore.count++">mainStore.count++</button>
    <button @click="add()">add()</button>
    <button @click="add2()">add2()</button>
    <button @click="mainStore.addAmount(3)">mainStore.addAmount(3)</button>
    <p>name:{{ mainStore.name }}</p>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.scopeA {
  color: red;
}
</style>
<style module>
.link {
  color: green;
}
</style>
<style scoped lang="less">
// @color: red;
h2 {
  color: @color;
}
</style>
<style scoped lang="scss">
// $color: green;
h3 {
  color: $color;
}
</style>
<style scoped>
.postcss {
  height: 30px;
  width: 60px;
  background-color: orange;
  transform: rotate(25deg);
}
</style>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
  background-image: url(@/assets/kf.jpg);
  background-size: contain;
}
</style>
