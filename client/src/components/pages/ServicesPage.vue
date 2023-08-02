<script setup>
import { ref, computed, onMounted } from 'vue';

const activeCardIndex = ref(null);  // This will store the index of the card that's centered

const servicesContainer = ref(null); // This will store the reference to our services-container
const cards = ref([]);  // This will store references to all the service cards

const isDragging = ref(false);
const startY = ref(0);
const scrollTop = ref(0);
let lastY = 0;
let speed = 1.5;

const startDrag = (event) => {
    isDragging.value = true;
    startY.value = event.pageY - servicesContainer.value.offsetTop;
    scrollTop.value = servicesContainer.value.scrollTop;
    servicesContainer.value.classList.add('active');
}

const stopDrag = () => {
    isDragging.value = false;
    servicesContainer.value.classList.remove('active');
}

const doDrag = (event) => {
    if(!isDragging.value) return;
    const y = event.pageY - servicesContainer.value.offsetTop;
    const walk = (y - startY.value);

    requestAnimationFrame(() => {
        lastY += (walk - lastY) * speed;
        servicesContainer.value.scrollTop = scrollTop.value - lastY;
    });
}

const checkCenteredCard = () => {
    let centeredIndex = null;
    let smallestDistance = Infinity;

    cards.value.forEach((card, index) => {
        const cardBounds = card.getBoundingClientRect();
        const containerBounds = servicesContainer.value.getBoundingClientRect();

        const cardCenter = cardBounds.top + cardBounds.height / 2;
        const containerCenter = containerBounds.top + containerBounds.height / 2;

        const distanceToCenter = Math.abs(cardCenter - containerCenter);

        if (distanceToCenter < smallestDistance) {
            smallestDistance = distanceToCenter;
            centeredIndex = index;
        }
    });

    activeCardIndex.value = centeredIndex;
};

onMounted(() => {
    servicesContainer.value.addEventListener('dragstart', e => e.preventDefault());

    // Get references to the services-container and all the service cards
    servicesContainer.value = document.querySelector('.services-container');
    cards.value = document.querySelectorAll('.services-card');

    // Add a scroll listener to the services-container
    servicesContainer.value.addEventListener('scroll', checkCenteredCard);

    // Initially check which card is centered
    checkCenteredCard();
});

// This computed property will give us a boolean array indicating which card is active
const activeCards = computed(() => {
    return services.map((_, index) => index === activeCardIndex.value);
});

const services = [
  {
    name: 'Full-Stack Solutions',
    description: 'From frontend to backend, you get the whole package done.',
    icon: '../../assets/services-icons/programming.png',
  },
  {
    name: 'UI Design',
    description: 'Providing you with elegant and modern UI designs for your website.',
    icon: '../../assets/services-icons/ui-design.png',
  },
  {
    name: 'UX Optimization',
    description: 'User experience is the key to success and optimization is the name of the game.',
    icon: '../../assets/services-icons/ux-design.png',
  },
  {
    name: 'Responsive',
    description: 'Mobile or desktop, I got you covered.',
    icon: '../../assets/services-icons/ux.png',
  },
  {
    name: 'Database Management',
    description: 'Ensuring that your user data is safe and secure at all times.',
    icon: '../../assets/services-icons/database.png',
  },
  {
    name: 'Satisfaction Guaranteed',
    description: 'A 100% satisfaction guarantee.',
    icon: '../../assets/services-icons/smile.png',
  }
]

const useImage = (url) => {
  return new URL(url, import.meta.url).href
}
</script>

<template>
  <div class="section3-area">
      <h1 class="services-h1">My Services</h1>
      <div ref="servicesContainer" class="services-container" @mousedown="startDrag" @mouseleave="stopDrag" @mouseup="stopDrag" @mousemove="doDrag">
          <div ref="cardContainer" v-for="(service, index) in services" :key="index" class="services-card-container">
              <div class="services-card" :class="{ active: activeCards[index] }">
                  <img class="services-icon" :alt="service.name" :src="useImage(service.icon)"/>
                  <h2>{{service.name}}</h2>
                  <p>{{service.description}}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.section3-area {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 2rem 0;

  @media (max-width: 1181px) {
    padding: 1rem;
  }
}
.services-h1 {
  color: var(--accentColor);
  font-size: 3rem;
  line-height: 4.5rem;

  @media (max-width: 1181px) {
    font-size: 2rem;
    line-height: 3rem;
  }
}
.services-container {
  display: grid;
    padding: 0 8rem;
    max-height: 80vh;
    overflow-y: auto;
  place-items: center;
  grid-template-columns: 1fr;
    scroll-snap-type: y mandatory;
    cursor: grab;
    will-change: scroll-position;

    &.active {
        cursor: grabbing;
        user-select: none;
    }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1181px) {
    padding: 0;
  }
}
.services-card-container {
  display: grid;
  place-items: center;
    scroll-snap-align: center;
    margin: 1rem 0;

    // Adjust top margin for the first child
    &:first-child {
        margin-top: 6rem;
    }

    // Adjust bottom margin for the last child
    &:last-child {
        margin-bottom: 10rem;
    }
}
.services-card {
  text-align: center;
  width: 20vw;
  color: var(--textColor);
  padding: 2rem;
  background: var(--backgroundColor);
  border: 0.5rem solid var(--textColor);
  border-radius: 0.5rem;
    transform: scale(0.9);
    opacity: 0.6;
    transition: transform 0.4s ease;

  @media (max-width: 1181px) {
    width: 100%;
  }

  .services-icon {
    height: 5vw;
    width: auto;
    margin-bottom: 2rem;

    @media (max-width: 1181px) {
      height: 15vw;
      width: auto;
    }
  }
}

.active {
  transform: scale(1);
  opacity: 1;
}
</style>