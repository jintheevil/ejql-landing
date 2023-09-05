<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import InitialLanding from "./components/util/InitialLanding.vue";
</script>

<template>
    <div class="body">
      <Header class="header-sticky"></Header>
      <InitialLanding></InitialLanding>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
      <Footer></Footer>
    </div>
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

.body {
  position: relative;
  height: 100vh;
  overflow: auto;
}
</style>
