import {createRouter, createWebHistory} from "vue-router";

// Import routed pages
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import CreateBlog from "../pages/CreateBlog.vue";
import BlogList from "../pages/BlogList.vue";
import IndividualBlog from "../pages/IndividualBlog.vue";

// Routes
const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
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
        name: 'Create-Blog'
    }
]

// Build router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Export router
export default router;