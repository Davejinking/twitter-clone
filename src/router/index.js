import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'

// 라우트 생성
const routes = [
    { path: '/', component: Home },
    { path: '/notification', component: Notifications },
    { path: '/messages', component: Messages },
    { path: '/profile', component: Profile },
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router를 내보내기
export default router