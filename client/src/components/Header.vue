<script setup>
import {computed, ref} from "vue";
import { useRouter } from "vue-router";
import Menu from "./util/Menu.vue";
import {useSettingsStore} from "../store/SettingsModel.js";
import Modal from "./util/Modal.vue";

const currentRouter = computed(() => {
  return useRouter().currentRoute.value.name;
});

const isMobile = computed(() => {
  return window.innerWidth <= 1024;
})

const toggleModal = () => {
  useSettingsStore().setModal();
}

const navItems = [
    {
        name: 'Home',
        label: 'HOME',
        route: '/',
        id: 'landing',
        href: '#',
    },
    {
        name: 'About',
        label: 'ABOUT',
        route: '/about',
        id: 'about',
        href: '#about',
    },
    {
        name: 'Services',
        label: 'SERVICES',
        route: '/services',
        id: 'services',
        href: '#services',
    },
    {
        name: 'Projects',
        label: 'PROJECTS',
        route: '/projects',
        id: 'projects',
        href: '#projects',
    },

]

</script>

<template>
  <div class="container-fluid main-header">
      <div class="navbar-brand">
          <h4 v-if="!isMobile" class="hello-logo slide-in-right" >WELCOME!</h4>
          <div v-else>
            <menu-icon @click="toggleModal" class="menu-icon slide-in-right"></menu-icon>
          </div>
      </div>
      <div class="nav-bar slide-in-bottom">
          <div v-for="navItem in navItems" class="nav-item">
              <router-link class="nav-link" :class="currentRouter === navItem.name ? 'active' : ' '"  :to=" navItem.route ">{{ navItem.label }}</router-link>
          </div>
      </div>
      <Menu class="slide-in-left"></Menu>
      <Modal v-if="useSettingsStore().getModal" :navItems="navItems"></Modal>
  </div>
</template>

<style scoped>
.hello-logo {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: var(--accentColor);
    margin: 0;
}
.main-header {
    height: 5rem;
    display: flex;
    place-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
    background: var(--backgroundColor);
}
@media (max-width: 1181px) {
  .main-header {
    padding: 0 1rem;
  }
  .nav-bar {
    display: none !important;
  }
  .nav-link:hover {
    transform: none;
  }
  .dropdown {
    display: none;
  }
  .desktop-toggle {
    display: none;
  }
}
.nav-bar {
    display: flex;
    gap: 2rem;
}
.nav-link{
    color: var(--accentColor);
    opacity: 0.5;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: transform 0.25s ease-in-out;
    font-size: 1.2rem;
}
.nav-link:hover {
    color: var(--accentColor);
    transform: translateY(-0.5rem);
    transition: all 0.125s ease-in;
    opacity: 1;
}

.menu-icon {
  color: var(--textColor);
  height: 4rem;
  width: 4rem;
}

.active {
    color: var(--accentColor);
    opacity: 1;
}
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    background-color: var(--accentColor);
    color: var(--primaryColor);
    padding: 10px 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown-toggle:hover {
    background-color: var(--accentColor);
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: var(--primaryColor);
    min-width: 100px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
    right: 0;
}

.dropdown-menu a {
    color: var(--textColor);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-menu a:hover {
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.desktop-toggle {
}

.slide-in-left {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 4.25s both;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}


.slide-in-right {
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 4.25s both;
}

@keyframes slide-in-right {
    0% {
        transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-bottom {
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 4.75s both;
}

@keyframes slide-in-bottom {
    0% {
        transform: translateY(5rem);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>