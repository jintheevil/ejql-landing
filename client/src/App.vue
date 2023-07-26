<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import {loadFull} from "tsparticles";

import {useSettingsStore} from "./store/SettingsModel.js";
import {defineEmits, withDefaults, computed, watch, onMounted} from "vue";

const emit = defineEmits(['settings-changed']);

const settings = computed(() => useSettingsStore().getMode);
const visited = computed(() => useSettingsStore().getVisited);

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

onMounted(() => {
    setTimeout(() => {
        useSettingsStore().setVisited()
    }, 3800);
})
</script>

<template>
  <Header></Header>
    <div v-if="!useSettingsStore().getVisited"  class="initialVisit">
        <h1 class="animation-text">E L J Q</h1>
        <div class="chip-left-line line"></div>
        <div class="bottom-line line"></div>
    </div>
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

.initialVisit {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background: var(--backgroundColor);
    color: var(--textColor);
    z-index: 3;
    margin-left: -10rem;
    display: grid;
    place-items: center;

    @media (max-width: 1181px) {
        margin-left: 0;
    }
}

.animation-text {
    animation: come-in 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both, go-out 0.8s 2.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

}

@keyframes come-in {
    0% {
        letter-spacing: 2em;
        transform: translateZ(100vw);
        opacity: 0;
    }
    20% {
        opacity: 0.6;
    }
    100% {
        transform: translateZ(0);
        opacity: 1;
    }
}

@keyframes go-out {
    0% {
        transform: translateZ(0);
        opacity: 1;
    }
    60% {
        opacity: 0.8;
    }
    100% {
        letter-spacing: 1em;
        transform: translateZ(100vw);
        opacity: 0;
    }
}

.line {
    position: absolute;
    height: 0.25rem;
    background-color: var(--textColor);
}

.bottom-line {
    bottom: 5rem;
    left: 0;
    animation: come-in-top 3.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
}

@keyframes come-in-top {
    0% {
        width: 0;
    }

    65% {
        width: 50vw;
    }

    100% {
        width: 100vw;
    }
}

.chip-left-line {
    bottom: 70vh;
    width: 25vh;
}

</style>
