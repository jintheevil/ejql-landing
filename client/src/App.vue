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
    <particles-component
            style="z-index: -99;"
            id="tsparticles"
            @settings-changed="particlesInit"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#transparent'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: settings.value ? '#f1f1f1' : '#aaaaaa'
                        },
                        links: {
                            color: settings.value ? '#f1f1f1' : '#aaaaaa',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 3,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1200
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
    ></particles-component>
  <Header></Header>
  <router-view></router-view>
<!--  <Footer></Footer>-->
</template>

<style scoped>
body {
    position: relative;
}
</style>
