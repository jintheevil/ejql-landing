<script setup>
import {useSettingsStore} from "../../store/SettingsModel.js";
import {ref, computed, onMounted} from "vue";

const visited = computed(() => useSettingsStore().getVisited);

let letters = ref(['E', 'L', 'J', 'Q'])

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const setLetterWithDelay = (index, value, delay) => {
    setTimeout(() => {
        letters.value[index] = value;
    }, delay);
};

const getRandomLetter = () => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

let interval;

onMounted(() => {
    interval = setInterval(() => {
        for (let i = 0; i < letters.value.length; i++) {
            letters.value[i] = getRandomLetter();
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        const finalLetters = ['E', 'L', 'J', 'Q'];
        for (let i = 0; i < finalLetters.length; i++) {
            setLetterWithDelay(i, finalLetters[i], i * 150);
        }
    }, 1800);

    setTimeout(() => {
        useSettingsStore().setVisited()
    }, 7000);
})
</script>

<template>
    <div  class="initialVisit">
        <div class="animation-text">
            <h1 v-for="(letter, index) in letters" :key="index" class="letters">{{letter}}</h1>
        </div>
        <div class="bottom-line line"></div>
    </div>
</template>

<style scoped>
.initialVisit {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background: var(--backgroundColor);
    color: var(--textColor);
    z-index: 9;
    margin-left: -10rem;
    display: grid;
    place-items: center;
    animation: fade-out 0.5s 4s ease-out forwards;
    overflow: hidden;

    @media (max-width: 1181px) {
        margin-left: 0;
    }
}

.animation-text {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: come-in 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both, go-out 0.8s 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
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

@keyframes fade-out {
    0% {
        opacity: 1;
        visibility: hidden;
    }
    100% {
        opacity: 0;
        visibility: hidden;
        display: none;
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

.letters {
    width: 48px;
    margin-right: 1rem;
}

</style>
