import {createRouter, createWebHistory} from "vue-router";

// Import routed pages
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import CreateBlog from "../pages/CreateBlog.vue";
import BlogList from "../pages/BlogList.vue";
import IndividualBlog from "../pages/IndividualBlog.vue";

import LandingContactCard from "../components/pages/AboutPage.vue";
import LandingServices from "../components/pages/ServicesPage.vue";
import LandingFlicker from "../components/pages/ProjectsPage.vue";
import LandingIntroduction from "../components/pages/HomePage.vue";
import {useSettingsStore} from "../store/SettingsModel.js";

// Routes
const routes = [
    {
        path: '/',
        component: LandingIntroduction,
        name: 'Home',
    },
    {
        path: '/about',
        component: LandingContactCard,
        name: 'About',
    },
    {
        path: '/services',
        component: LandingServices,
        name: 'Services',
    },
    {
        path: '/projects',
        component: LandingFlicker,
        name: 'Projects',
    },
    {
        path: '/blog',
        component: Blog,
        name: 'Blog',
        children: [
            {
                path: '',
                component: BlogList,
                name: 'Blog List',
            },
            {
                path: ':id',
                component: IndividualBlog,
                name: 'BlogDetail',
            }
        ]
    },
    {
        path: '/admin/create-blog',
        component: CreateBlog,
        name: 'Create-Blog',
    }
]

// Build router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.name !== 'Home' && !from.name) {
        return { name: 'Home' };
    }
})

// Export router
export default router;