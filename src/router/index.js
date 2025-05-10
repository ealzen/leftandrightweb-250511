// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/message-board',
        component: () => import('../pages/MessageBoard.vue')
    },
    {
        path: '/form-generator',
        component: () => import('../pages/FormGenerator.vue')
    },
    {
        path: '/todo-list',
        component: () => import('../pages/TodoList.vue')
    },
    {
        path: '/media-player',
        component: () => import('../pages/MediaPlayer.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;