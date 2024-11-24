import {createRouter, createWebHashHistory} from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import SignupView from '@/views/SignupView.vue'

const routes = [
    {
        path: '/',
        name: 'Posts',
        component: PostsView,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    }]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
