import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

// 라우트 상세정의
const routes = [
    { path: '/', component: Home, title: '홈', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout' }},
    { path: '/', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout' }},
    { path: '/notification', component: Notifications, title: '알림', icon: 'fas fa-bell fa-fw text-2xl' , meta: { isMenu: true, layout: 'DefaultLayout' }},
    { path: '/messages', component: Messages, title: '쪽지', icon: 'fas fa-envelope fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout'  }},
    { path: '/', component: Messages, title: '북마크', icon: 'fas fa-bookmark fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout'  }},
    { path: '/', component: Messages, title: '리스트', icon: 'fas fa-list-alt fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout'  }},
    { path: '/profile', component: Profile, title: '프로필', icon: 'fas fa-user fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout'  }},
    { path: '/', component: Messages, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout'  }},

    // TODo 화면 레이아웃이 깨지는데 회원가입 로그인 항목 비표시면은 라우츠를 다른걸로 정의해서 사용해되는거아님?
    // 회원가입
    { path: '/register', component: Register, meta: { isMenu: false, layout: 'EmptyLayout' }},
    // 로그인
    { path: '/Login', component: Login, meta: { isMenu: false, layout: 'EmptyLayout' }},
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((from, to, next) => {
    // 인증이 없을경우
    // router.push('/login')
    // 인증을 받아을경우
    next()
})

// router를 내보내기
export default router
