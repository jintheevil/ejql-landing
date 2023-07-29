<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import Menu from "./util/Menu.vue";

const currentRouter = computed(() => {
  return useRouter().currentRoute.value.name;
});

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
  <div class="empty"></div>
  <div class="container-fluid main-header">
      <div class="navbar-brand">
          <h4 class="hello-logo">WELCOME!</h4>
      </div>
      <div class="nav-bar">
          <div v-for="navItem in navItems" class="nav-item">
              <router-link class="nav-link" :class="currentRouter === navItem.name ? 'active' : ' '"  :to=" navItem.route ">{{ navItem.label }}</router-link>
          </div>
      </div>
      <Menu></Menu>
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
    z-index: 2;
    background: var(--backgroundColor);

    @media (max-width: 1181px) {
        padding: 0 1rem;
        //position: sticky;
        //top: 0;
        //left: 0;
        //z-index: 2;
        //background: var(--backgroundColor);
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
    @media (max-width: 1181px) {
        display: none;
    }
}

</style>