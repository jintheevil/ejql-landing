<script setup>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import {onMounted, ref} from "vue";

const flicking = ref(null)
const flickLeft = () => {
    if (flicking.value.index !== 0) {
        flicking.value.prev();
    }
}

const flickRight = () => {
    flicking.value.next();
}

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});
</script>

<template>
    <div class="section4-area">
        <div class="text-area">
            <h1 class="projects-h1">Past Projects</h1>
            <h2 class="projects-h2">and constantly adding more...</h2>
        </div>
        <div class="swiper-text"><div class="swiper-left" @click="flickLeft">&lt;&lt;</div> Swipe <div class="swiper-right" @click="flickRight">&gt;&gt;</div></div>
        <div class="flick-background">
            <Flicking ref="flicking" class="flick-container" :options="{ circular: false, align: 'center', gap: '2rem', panelsPerView: 1 }">
                <a class="flick-panel" href="https://www.hugemaxsolutions.com.my" target="_blank">
                    <h4 class="flick-title">Hugemax Solutions Sdn. Bhd.</h4>
                    <img class="panel" alt="#" src="../../assets/projects/hugemax-website.png"/>
                </a>
                <a class="flick-panel" href="https://www.hugemaxsolutions.com.my" target="_blank">
                    <h4 class="flick-title">Hugemax Solutions Sdn. Bhd.</h4>
                    <img class="panel" alt="#" src="../../assets/projects/hugemax-website.png"/>
                </a>
            </Flicking>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section4-area {
  display: grid;
  place-items: center;
  min-height: 100vh;
    padding-top: 2rem;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 1rem;
  }
}
.text-area {
    text-align: center;
}
.projects-h1 {
  color: var(--accentColor);
}
.projects-h2 {
  color: var(--accentColor);
}
.flick-panel {
  display: grid;
  place-items: center;
}
.flick-title {
  color: var(--textColor);
  text-decoration: underline;
  margin-bottom: 1rem;
}
.panel {
  height: auto;
  width: 45rem;
  background: #fafafa;
  object-fit: cover;

  @media (max-width: 1181px) {
    width: 20rem;
  }
}

.flick-background {
  position: relative;
  padding: 4rem 0;
}

.flick-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
    opacity: 0.5;
  z-index: -1;
  border-radius: 1rem;
}

.flick-container {
  width: 90vw;

  @media (min-width: 720px) {
    width: 70vw;
  }
}

.swiper-text {
  color: var(--textColor);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.swiper-left {
  animation: swipe-left 2s infinite;
  cursor: pointer;
}

@keyframes swipe-left {
  0%,20% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    transform: translateX(0);
  }
}

.swiper-right {
  animation: swipe-right 2s infinite;
  cursor: pointer;
}

@keyframes swipe-right {
  0%,20% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>