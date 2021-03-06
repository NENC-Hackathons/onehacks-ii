import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            isLoggedIn: true
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;