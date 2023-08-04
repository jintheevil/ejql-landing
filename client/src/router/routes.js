import {createRouter, createWebHistory} from "vue-router";

// Import routed pages
// const Home = () => import("../pages/Home.vue");
// const About = () => import("../pages/About.vue");
const Blog = () => import("../pages/Blog.vue");
const CreateBlog = () => import("../pages/CreateBlog.vue");
const BlogList = () => import("../pages/BlogList.vue");
const IndividualBlog = () => import("../pages/IndividualBlog.vue");


const LandingContactCard = () => import("../components/pages/AboutPage.vue");
const LandingServices = () => import("../components/pages/ServicesPage.vue");
const LandingFlicker = () => import("../components/pages/ProjectsPage.vue");
const LandingIntroduction = () => import("../components/pages/HomePage.vue");

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