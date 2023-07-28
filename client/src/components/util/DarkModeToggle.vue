<script setup>
import { computed, ref, watch } from "vue";
import { useSettingsStore } from "../../store/SettingsModel.js"

const dark = computed(() => useSettingsStore().getMode);

const toggleMode = () => {
    useSettingsStore().setMode();

    const rootStyle = document.documentElement.style;
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
  <div style="margin: 1rem">
      <div class="dark-mode-toggle" :class=" !dark ? 'day' : 'night' " @click="toggleMode">
          <div :class=" !dark ? 'sun' : 'moon' "></div>
          <div>
              <svg class="day-cloud">
                  <path xmlns="http://www.w3.org/2000/svg" d="M12.5 8.49999C5.1938 8.49934 3.49995 13 4.99996 16.5C6.49997 20 26 19.5 29.5 19.5C33 19.5 51.5 20.5 52.5 16.5C53.5 12.5 50 9.00004 48 7.00004L48 7C46 5 40.7222 4.46027 38.5 7C36.2462 2.44533 35 4.76837e-07 28.5 0.999996C22.5 2.5 19 11 19 11C19 11 19.8061 8.50064 12.5 8.49999Z" fill="#FAFAFA"/>
              </svg>
          </div>
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
  position: relative;
  z-index: 3;
  overflow: hidden;
}
.sun {
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background: #fdd835;
  transition: all 0.2s ease;
  border: 0.5px #ffffff;
  animation: radiate 2s infinite 0.25s;
}

@keyframes radiate {
  0% {
    box-shadow: 0 0 5px 1px #fdd835;
  }
  50% {
    box-shadow: 0 0 15px 5px #fdd835;
  }
  100% {
    box-shadow: 0 0 5px 1px #fdd835;
  }
}

.moon {
  height: 100%;
  width: 25%;
  border-radius: 50%;
  background: #f9f9f9;
  transform: translateX(3.9rem);
  transition: transform 0.2s ease, box-shadow 0.5s ease 1s;
  border: 0.5px #444;
  z-index: 1;
}
.day {
  background: #87CEEB;
  transition: all 0.2s ease-in;
  border: 0.1rem solid #333;

  .day-cloud {
    position: absolute;
    top: 0.5rem;
    left: 0;
    transition: all 0.2s ease, opacity 0.5s ease 0.25s;
    opacity: 1;
  }
}
.night {
  background: #213547;
  transition: all 0.2s ease-in;
  border: 0.1rem solid #fff;

  .day-cloud {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .moon {
    box-shadow: 0 0 15px 5px #f9f9f9;
  }
}
</style>