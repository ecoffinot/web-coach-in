import Home from "@/components/Home.vue";
import NotFound from "@/components/NotFound.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: "Home",
        component : Home
    },
    {
        path: '/about',
        name : 'About',
        component: NotFound
    }
]

const router = createRouter({
   history : createWebHistory(),
    routes
});

export default router