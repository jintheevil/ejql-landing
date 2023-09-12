<script setup>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import {onMounted, ref} from "vue";

import Hugemax from '/assets/projects/hugemax-website.png';
import NOOCI from '/assets/projects/NOOCISite.png';
import SQLDashboard from '/assets/projects/SQLDashboardSite.png';

const websites = [
  {
    name: 'Hugemax Solution Sdn Bhd',
    href: 'https://www.hugemaxsolutions.com.my',
    asset: Hugemax,
    description: [
        'Simple yet clean design.',
        'Vue 3 + Firebase',
        'Built with Quasar framework.'
    ]
  },
  {
    name: 'Nooci',
    href: 'https://www.mynooci.com',
    asset: NOOCI,
    description: [
        'Modern day e-commerce website.',
        'Built with Shopify e-Store.',
        'HTML + CSS + JS',
        'Liquid'
    ]
  },
  {
    name: 'SQL Dashboard',
    href: 'https://sqlacc-dashboard.sql.com.my/',
    asset: SQLDashboard
  },
]

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
    </div>
    <div class="swiper-text"><div class="swiper-left" @click="flickLeft">&lt;&lt;</div> Swipe <div class="swiper-right" @click="flickRight">&gt;&gt;</div></div>
    <div class="flick-background">
      <Flicking ref="flicking" class="flick-container" :options="{ circular: false, align: 'center', gap: '2rem', panelsPerView: 1 }">
        <a v-for="(site, index) in websites" :key="index" class="flick-panel" :href="site.href" target="_blank">
          <h4 class="flick-title">{{ site.name }}</h4>
          <img class="panel" alt="#" :src="site.asset"/>
<!--          <div class="hover-info" style="&#45;&#45;infoBackground: #fafafa; &#45;&#45;infoText: #333333;">-->
<!--            <h4 class="flick-title">{{ site.name }}</h4>-->
<!--            <div class="info-card">-->
<!--              <span v-for="(desc, index) in site.description">-->
<!--                {{ desc }}-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
        </a>
      </Flicking>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section4-area {
  display: grid;
  place-items: center;
  min-height: 100dvh;
  padding-top: 2rem;
  overflow: hidden;
  grid-template-rows: 0.1fr 0.1fr 0.8fr;
}
@media (max-width: 600px) {
  .section4-area {
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

  .hover-info {
    height: 50%;
    width: 100%;
    position: absolute;
    bottom: -25rem;
    background: var(--infoBackground);
    color: var(--infoText);
    padding: 2rem;
    opacity: 0;
    transition: bottom 250ms ease, opacity 250ms ease;

    .flick-title {
      color: #1a1a1a;
    }

    .info-card {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  &:hover {
    .hover-info {
      opacity: 0.9;
      bottom: 0;
      transition: bottom 300ms ease;
    }
  }
}
.panel {
  height: auto;
  width: 70vw;
  background: #fafafa;
  object-fit: cover;
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
}
@media (min-width: 720px) {
  .flick-container {
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