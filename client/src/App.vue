<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {ParticlesComponent} from "vue3-particles";

import {loadFull} from "tsparticles";

import {useSettingsStore} from "./store/SettingsModel.js";
import { defineEmits, withDefaults, computed, watch} from "vue";

const emit = defineEmits(['settings-changed']);

const settings = computed(() => useSettingsStore().getMode);

watch(settings, (newSettings, oldSettings) => {
    if (newSettings.value !== oldSettings.value) {
        emit('settings-changed');
        console.log(settings)
    }
})

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped>
</style>
