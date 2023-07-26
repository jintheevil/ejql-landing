<script setup>
import LandingIntroduction from "../components/LandingIntroduction.vue";
import {useSettingsStore} from "../store/SettingsModel.js";
</script>

<template>
<!--      <svg class="line" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M12.107623100280762,231.39013671875C34.062779169082646,220.4125584411621,84.23317873954772,157.3632327270508,141.25559997558594,166.81614685058594C198.27802121162415,176.2690609741211,238.52017318725586,290.654708404541,347.53363037109375,286.9955139160156C456.54708755493164,283.33631942749025,708.5650384521484,169.38116027832032,782.51123046875,145.29147338867188" fill="none" stroke-width="25" stroke="#4281ff" stroke-linecap="round" stroke-dasharray="0 0" stroke-opacity="0.4"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>-->
      <LandingIntroduction id="landing"></LandingIntroduction>
<!--      <LandingContactCard id="about"></LandingContactCard>-->
<!--      <LandingServices id="services"></LandingServices>-->
<!--      <LandingFlicker id="projects"></LandingFlicker>-->
</template>

<style lang="scss" scoped>
</style>