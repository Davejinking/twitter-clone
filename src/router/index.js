import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'

// 라우트 생성
const routes = [
    { path: '/', component: Home, title: '홈', icon: 'fas fa-home fa-fw text-2xl'},
    { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw text-2xl'},
    { path: '/notification', component: Notifications, title: '알림', icon: 'fas fa-bell fa-fw text-2xl' },
    { path: '/messages', component: Messages, title: '쪽지', icon: 'fas fa-envelope fa-fw text-2xl' },
    { path: '/', component: Messages, title: '북마크', icon: 'fas fa-bookmark fa-fw text-2xl' },
    { path: '/', component: Messages, title: '리스트', icon: 'fas fa-list-alt fa-fw text-2xl' },
    { path: '/profile', component: Profile, title: '프로필', icon: 'fas fa-user fa-fw text-2xl' },
    { path: '/', component: Messages, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl' },
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router를 내보내기
export default router


// <!-- 탐색하기 -->
// <router-link to="/" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-hashtag  fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">탐색하기</span>
// </router-link>
// <!-- 알림 -->
// <router-link to="/notification" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-bell fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">알림</span>
// </router-link>
// <!-- 쪽지 -->
// <router-link to="/messages" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-envelope fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">쪽지</span>
// </router-link>
// <!-- 북마크 -->
// <router-link to="/" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-bookmark fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">북마크</span>
// </router-link>
// <!-- 리스트 -->
// <router-link to="/" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-list-alt fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">리스트</span>
// </router-link>
// <!-- 프로필 -->
// <router-link to="/profile" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-user fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">프로필</span>
// </router-link>
// <!-- 더 보기 -->
// <router-link to="/" class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer">
//     <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
//     <span class="ml-3 text-xl hidden xl:inline-block">더 보기</span>
// </router-link>