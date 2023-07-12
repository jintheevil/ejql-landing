<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import DarkModeToggle from "./DarkModeToggle.vue";
import { useSettingsStore } from "../store/SettingsModel.js";

const currentRouter = computed(() => {
  return useRouter().currentRoute.value.name;
});

const settings = computed(() => useSettingsStore().getMode);

const navItems = [
    {
        name: 'Home',
        label: 'HOME',
        route: '/',
    },
    {
        name: 'About',
        label: 'ABOUT',
        route: '/about',
    },
    {
        name: 'Blog',
        label: 'BLOG',
        route: '/blog',
    },
    {
        name: 'Projects',
        label: 'PROJECTS',
        route: '/projects',
    },

]

</script>

<template>
  <div class="empty"></div>
  <div class="container-fluid main-header">
      <div class="navbar-brand">
          <h4 class="hello-logo">WELCOME!</h4>
      </div>
<!--      <div class="nav-bar">-->
<!--          <div v-for="navItem in navItems" class="nav-item">-->
<!--              <router-link class="nav-link" :class="currentRouter === navItem.name ? 'active' : ' '"  :to="navItem.route">{{ navItem.name }}</router-link>-->
<!--          </div>-->
<!--      </div>-->
      <DarkModeToggle></DarkModeToggle>
<!--      <div class="dropdown">-->
<!--          <a class="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--              <menu-icon></menu-icon>-->
<!--          </a>-->

<!--          <div class="dropdown-menu">-->
<!--              <div v-for="navItem in navItems" class="nav-item">-->
<!--                  <router-link class="nav-link" :class="currentRouter === navItem.name ? 'active' : ' '"  :to="navItem.route">{{ navItem.name }}</router-link>-->
<!--              </div>-->
<!--              <DarkModeToggle></DarkModeToggle>-->
<!--          </div>-->
<!--      </div>-->
  </div>
</template>

<style scoped>
.empty {
    display: none;


}
.hello-logo {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: var(--primaryColor);
    margin: 0;
}
.main-header {
    height: 5rem;
    display: flex;
    place-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    position: sticky;

    @media (max-width: 1181px) {
        padding: 0 1rem;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
        background: var(--backgroundColor);
    }
}
.btn {
    background: none;
}
.nav-bar {
    display: flex;
    gap: 2rem;

    @media (max-width: 1181px) {
        display: none;
    }
}
.nav-link{
    color: var(--headerColor);
    padding: 1rem;
    border-radius: 0.5rem;
    transition: transform 0.25s ease-in-out;
    font-size: 1.2rem;
}
.nav-link:hover {
    color: var(--accentColor);
    transform: translateY(-0.5rem);
    transition: all 0.125s ease-in;

    @media (max-width: 1181px) {
        transform: none;
    }
}
.active {
    color: var(--accentColor);
}
.dropdown {
    position: relative;
    display: inline-block;

    @media (min-width: 1181px) {
        display: none;
    }
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
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
    @media (max-width: 1181px) {
        display: none;
    }
}

</style>