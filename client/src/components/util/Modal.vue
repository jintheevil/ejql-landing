<script setup>
import {useSettingsStore} from "../../store/SettingsModel.js";

defineProps({
  navItems: [Object]
})
</script>

<template>
  <div @click="useSettingsStore().setModal()" class="modal-container"></div>
  <div class="modal-box">
    <div class="modal-body">
      <router-link class="nav-link" v-for="(nav, index) in navItems" :to="nav.route" :name="nav.name">{{ nav.name }}</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-container {
  height: 100dvh;
  width: 100vw;
  background: #333333;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  animation: modal 350ms ease;
}

@keyframes modal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}
.modal-box {
  height: 100dvh;
  padding: 2rem;
  background: var(--backgroundColor);
  position: absolute;
  top: 0;
  left: 0;
  animation: slide-in-left 250ms ease;
}

.modal-body {
  display: grid;
  gap: 2rem;

  h4 {
    color: var(--textColor);
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-20rem);
  }
  100% {
    transform: translateX(0);
  }
}

.nav-link{
  color: var(--accentColor);
  opacity: 0.5;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.25s ease-in-out;
  font-size: 1.2rem;
}
.nav-link:hover {
  color: var(--accentColor);
  transform: translateY(-0.5rem);
  transition: all 0.125s ease-in;
  opacity: 1;
}
@media (max-width: 1181px) {
  .nav-link:hover {
    transform: none;
  }
}
</style>