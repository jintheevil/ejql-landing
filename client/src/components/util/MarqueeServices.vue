<script setup>
const services = [
    'Full-Stack Solutions',
    'UI Design',
    'UX Optimization',
    'Responsive Design',
    'Database Management',
    'Search Engine Optimization',
    'Hosting',
    'Satisfaction Guaranteed'
]
</script>

<template>
  <div class="page-container">
    <div class="text-wrapper ltr">
      <h1 :key="index" v-for="(service, index) in [...services, ...services, ...services]">{{ service }}</h1>
    </div>
    <h1 class="services-header">
      My Services
    </h1>
    <div class="text-wrapper rtl">
      <h1 :key="index" v-for="(service, index) in [...services, ...services, ...services].reverse()">{{ service }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin-left: -10rem;
  display: grid;
  gap: 4rem;

  @media (max-width: 1424px) {
    margin-left: 0;
  }
}

.services-header {
  width: 100vw;
  color: var(--textColor);
  display: grid;
  place-items: center;
}

.text-wrapper {
  display: flex;
  align-items: center;

  &:hover {
    animation-play-state: paused;
  }

  h1 {
    font-size: 1rem !important;
    color: var(--textColor);
    white-space: nowrap;
    padding: 0 4rem !important;
    line-height: 2rem;

    &:hover {
      transform: scale(1.2);
      transition: transform 400ms ease;
      cursor: default;
    }
  }
}

.ltr {
  animation: move-ltr 120s linear infinite;
}

.rtl {
  animation: move-rtl 120s linear infinite;
}

@keyframes move-rtl {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes move-ltr {
  0% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(50%);
  }
}
</style>