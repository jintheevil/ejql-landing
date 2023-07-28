<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import InitialLanding from "./components/InitialLanding.vue";
</script>

<template>
  <Header></Header>
  <InitialLanding></InitialLanding>
  <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
  </transition>
  <Footer></Footer>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
