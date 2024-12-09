import {createRouter, createWebHistory} from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import SignupView from '@/views/SignupView.vue'
import ApostView from "@/views/ApostView.vue";
import AddPost from "@/views/AddPost.vue";

const routes = [
    {
        path: '/posts',
        name: 'Posts',
        component: PostsView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    },
    {
        path: "/apost/:id",
        name: "APost",
        component: ApostView,
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddPost
    },
    {
        path: '/:catchAll(.*)',
        name: 'Posts',
        component: PostsView
    }
     ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
