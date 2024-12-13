import {createRouter, createWebHistory} from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import SignupView from '@/views/SignupView.vue'
import ApostView from "@/views/ApostView.vue";
import AddPost from "@/views/AddPost.vue";
import LoginView from "@/views/Login.vue";
import auth from "../auth";

const routes = [
    {
        path: '/posts',
        name: 'Posts',
        component: PostsView,
        beforeEnter: async(to, from, next) => {
            try {
                const authResult = await auth.authenticated(); 
                if (!authResult) {
                  next('/login');  
                } else {
                  next();  
                }
              } catch (error) {
                console.error("Authentication check failed", error);
                next('/signup');  
              }
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/apost/:id',
        name: 'APost',
        component: ApostView,
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddPost
    },
    
     ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
