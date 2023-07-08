<script setup>
import {computed, ref, watch} from "vue";
import { useSettingsStore } from "../store/SettingsModel.js"

const dark = computed(() => useSettingsStore().getMode);

const toggleMode = () => {
    useSettingsStore().setMode();

    const rootStyle = document.documentElement.style;
    console.log(rootStyle)
}

watch(dark, (newValue) => {
    const rootStyle = document.documentElement.style;
    if (newValue) {
        rootStyle.setProperty("--backgroundColor", "var(--darkModeBackground)");
        rootStyle.setProperty("--textColor", "var(--darkModeText)");
    } else {
        rootStyle.setProperty("--backgroundColor", "var(--lightModeBackground)");
        rootStyle.setProperty("--textColor", "var(--lightModeText)");
    }
});

</script>

<template>
  <div style="margin: 5rem">
      <div class="dark-mode-toggle" :class=" !dark ? 'day' : 'night' " @click="toggleMode">
          <div :class=" !dark ? 'sun' : 'moon' "></div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.dark-mode-toggle{
  height: 2.1rem;
  width: 6rem;
  border-radius: 1rem;
  padding: 0.3rem;
  display: flex;
}
.sun {
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background: #fdd835;
  transition: all 0.2s ease;
  border: 0.5px #ffffff;
}
.moon {
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background: #f9f9f9;
  transform: translateX(3.9rem);
  transition: all 0.2s ease;
  border: 0.5px #444;
}
.day {
  background: #87CEEB;
  transition: all 0.2s ease-in;
  border: 0.1rem solid #333;
}
.night {
  background: #213547;
  transition: all 0.2s ease-in;
  border: 0.1rem solid #fff;
}
</style>