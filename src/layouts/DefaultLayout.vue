<!-- 
    * class 정리내용 *
        flex-col : 플렉스 항목을 세로로 배치
        items-start : 교차축 시작 정렬
        rounded-full: 레이아웃을 동글게만듬
        fa-fw : 위치고정
        space-y-1 : 스페이스 크기
        justify-between: 각 항목 사이에 동일한 양의 공간이 있도록 컨테이너의 기본 축을 따라 항목을 정렬
        사이드메뉴에서 아이콘과 트윗버튼을 하나의 태그로 묶어서 아래에있는 프로필과 별개로 나누어 사이가 벌어지도록 표시하기위해
        justify-between를 사용했다.
        justify-center:  항목 사이에 동일한 양의 공간이 있도록 컨테이너의 기본 축을 따라 가운데로 항목을 정렬
        cursor-pointer: 마우스 선택효과
        hover:opacity-80: 마우스 이벤트시 색 조절효과
        hidden: 비표시하기
        xl:block : xl크기일때 블록으로 만든다
        xl:flex : xl크기일때 플렉스로 만든다
        fa-plus : 플러스 아이콘
        border-r : 
        border-gray-100 :
        space-x-1
        fa-comment
        overflow-y-auto : 스크롤바
        relative:
        absolute:
        h-screen:
        container: 여백줄이기?
        mx-auto: 여백을 가운데로 하게만드는?
        router-link

-->
<template>
    <div class="flex h-screen container mx-auto relative">
        <!-- 사이드 메뉴 -->
        <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-center xl:items-start">
                <!-- twitter아이콘 -->
                <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
                <!-- 사이드메뉴 -->
                <div class="flex flex-col items-start space-y-1">
                    <!-- 라우터 링크 -->
                    <router-link
                        :to="route.path" :class="`hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full cursor-pointer ${router.currentRoute.value.name == route.name ? 'text-primary' : ''}`" v-for="route in routes" :key="route"
                    >
                    <div v-if="route.meta.isMenu">
                        <i :class="route.icon"></i>
                        <span class="ml-3 text-xl hidden xl:inline-block">{{ route.title }}</span>
                    </div>
                    </router-link>
                </div>

                <!-- tweet 버튼 -->
                <div class="w-full xl:pr-3 flex justify-center">
                    <button class=" mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark">
                        <span class="hidden xl:block">트윗</span>
                        <i class="fas fa-plus xl:hidden"></i>
                    </button>
                </div>
            </div>

            <!-- 프로필 화면 -->
            <div class="xl:pr-3 mb-3 relative" @click="showProfileDropdown = true">
                <!-- 프로필 이미지(화면 크기 기본형) -->
                <button class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center">
                    <!-- 프로필 이미지 -->
                    <img :src="currentuser.profile_image_url" class="w-10 h-10 rounded-full">

                    <!-- 프로필 상세내용(메일,이름) -->
                    <div class="ml-2 hidden xl:block">
                        <div class="text-sm font-bole">{{currentuser.email}}</div>
                        <div class="text-xs text-gray-500 text-left">@{{currentuser.username}}</div>
                    </div>

                    <!-- 프로필(옵션) -->
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"></i>
                </button>

                <!-- 프로필 이미지(화면 크기 반응형) -->
                <div class="xl:hidden flex justify-center">
                    <img :src="currentuser.profile_image_url" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80">
                </div>
            </div>
        </div>

        <!-- 메인 메뉴 --> 
        <div class="flex-1 flex h-screen">
            <!-- router view 설정 -->
            <router-view />
        </div>
        <!-- 프로필 드롭다운 메뉴 -->
        <div class="absolute bottom-20 left-12 shadow rounded-lg w-60 bg-white" v-if="showProfileDropdown" @click="showProfileDropdown = false">
            <button class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center">
            <img :src="currentuser.profile_image_url"  class="w-10 h-10 rounded-full" />
            <div class="ml-2">
                <div class="font-bold text-sm">{{currentuser.email}}</div>
                <div class="text-left text-gray-500 text-sm">@{{currentuser.username}}</div>
            </div>
            <i class="fas fa-check text-primary ml-auto"></i>
            </button>
            <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">@{{currentuser.username}} 계정에서 로그아웃</button>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import router from '../router'
import { auth } from '../firebase'
import store from '../store'

export default {
  setup() {
    const routes = ref([])
    const showProfileDropdown = ref(false)

    const currentuser = computed(() => store.state.user)

    // 로그아웃
    const onLogout = async () => {
      await auth.signOut()
      store.commit('SET_USER', null)
      await router.replace('/login')
    }
    // 값저장
    onBeforeMount(() => {
      routes.value = router.options.routes
    })
    return { routes, showProfileDropdown, onLogout, currentuser, router }
  },
}
</script>