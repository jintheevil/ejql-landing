<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import {useSettingsStore} from "../../store/SettingsModel.js";

let displayText = ref("");

const texts = [
    "HI, I'M EUGENE",
    "WELCOME"
];

let textIndex = ref(0);
let charIndex = ref(0);
let typingInterval;
let backspacingInterval;

const startTyping = async () => {
    charIndex.value = 0;

    await typeSingleText(texts[textIndex.value]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await backspaceText();

    textIndex.value = (textIndex.value + 1) % texts.length;

    await startTyping();
};

const typeSingleText = (text) => {
    return new Promise(resolve => {
        typingInterval = setInterval(() => {
            if (charIndex.value < text.length) {
                displayText.value += text.charAt(charIndex.value);
                charIndex.value++;
            } else {
                clearInterval(typingInterval);
                charIndex.value = 0;
                resolve();
            }
        }, 100);
    });
};

const backspaceText = () => {
    return new Promise(resolve => {
        backspacingInterval = setInterval(() => {
            if (displayText.value.length > 0) {
                displayText.value = displayText.value.slice(0, -1);
            } else {
                clearInterval(backspacingInterval);
                resolve();
            }
        }, 100);
    });
};

onMounted(() => {
    setTimeout(() => {
        startTyping();
    }, useSettingsStore().getVisited ? 250 : 4000);
});

onBeforeUnmount(() => {
    clearInterval(typingInterval);
    clearInterval(backspacingInterval);
});
</script>

<template>
    <div>
        <h1 class="landing-text" v-if="displayText">{{ displayText }}</h1>
        <h1 v-else class="placeholder-landing">Hi, I'm Eugene.</h1>
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 375px) {
  .landing-text {
    font-size: 1.8rem !important;
  }
  .placeholder-landing {
    font-size: 1.8rem !important;
  }
}

.placeholder-landing {
  visibility: hidden;
}
</style>