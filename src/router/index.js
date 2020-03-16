import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyPage from '../views/MyPage.vue'
import NotLogIn from '../views/NotLogIn.vue'

import EditProfile from '../views/rank1/EditProfile.vue'
import MakeAccount from '../views/rank1/MakeAccount.vue'
import LogIn from '../views/rank1/LogIn.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Search.vue')
    },
    {
        path: '/my-page',
        name: 'my-page',
        component: MyPage
    },
    {
        path: '/not-log-in',
        name: 'not-log-in',
        component: NotLogIn
    },
    {
        path: '/edit-profile',
        name: 'edit-profile',
        component: EditProfile
    },
    {
        path: '/make-account',
        name: 'make-account',
        component: MakeAccount
    },
    {
        path: '/log-in',
        name: 'log-in',
        component: LogIn
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
