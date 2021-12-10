<!--
    * class 정리내용 *
    relative:
    absolute:
    -bottom-14
    w-28 
    h-28
    font-semibold
    flex-none


-->
<template>
    <div class="flex flex-1">
        <!-- 프로필 섹션 -->
        <div class="flex flex-1 flex-col border-r border-color">
            <!-- 타이틀 -->
            <div class="px-3 py-1 flex border-b border-color">
                <button class="mr-4">
                    <i class="fas fa-arrow-left text-primary rounded-full hover:bg-blue-50"></i>
                </button>
                <!-- 프로필 정보 -->
                <div>
                    <div class="font-semibold text-lg">{{ currentUser.email }}</div>
                    <div class="text-xs text-gray">{{ currentUser.num_tweets }} 트윗</div>
                </div>
            </div>
            <!-- 백그라운드 이미지 -->
            <div class="bg-gray-300 h-40 relative flex-none">
                <!-- 프로필 이미지 -->
                <div class="border-4 border-white bg-gray-100 w-28 h-28 rounded-full absolute -bottom-14 left-2">
                    <img
                        :src="currentUser.profile_image_url"
                        class="rounded-full opacity-90 hover:opacity-100 cursor-pointer"
                    >
                </div>
            </div>
            <!-- 프로필 편집 버튼 -->
            <div class="text-right mt-2 mr-2 ">
                <button class="border text-sm border-primary text-primary px-3 py-1 hover:bg-blue-50 font-bold rounded-full">프로필 수정</button>
            </div>
            <!-- 유저정보 -->
            <div class="mx-2 mt-3">
                <div class="font-extrabold text-lg">{{ currentUser.email }}</div>
                <div class="text-gray">@{{ currentUser.username }}</div>
                <div>
                    <span class="text-gray">가입일:</span>
                    <span class="text-gray">{{ moment(currentUser.created_at).format('YYYY년 MM월 DD일') }}</span>
                </div>
                <div>
                    <span class="font-bold mr-1">{{ currentUser.followings.length }}</span>
                    <span class="text-gray mr-3">팔로우 중</span>
                    <span class="font-bold mr-1">{{ currentUser.followers.length }}</span>
                    <span class="text-gray">팔로우</span>
                </div>
            </div>
            <!-- 탭 -->
            <div class="flex border-b bodrder-color mt-3">
                <div class="py-3 text-primary font-bold border-b border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer">트윗</div>
                <div class="py-3 text-gray border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer">트윗 및 답글</div>
                <div class="py-3 text-gray border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer">미디어</div>
                <div class="py-3 text-gray border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer">마음에 들어요</div>
            </div>
            <!-- 트윗  -->
            <div class="overflow-y-auto">
                <Tweet v-for="tweet in tweets" :key="tweet.id" :currentUser="currentUser" :tweet="tweet"/>
            </div>
        </div>
        <!-- 트렌드 섹션 -->
        <Trends />
    </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
import store from '../store'
import { computed, onBeforeMount, ref } from 'vue'
import { TWEET_COLEECTION, USER_COLEECTION } from '../firebase'
import getTweetInfo from '../utils/getTweetInfo'
import moment from 'moment'

export default {
    components: { Trends, Tweet, onBeforeMount },
    setup() {
        const currentUser = computed(() => store.state.user)
        const tweets = ref([])

        onBeforeMount(() => {
            // 스토어에 실시간반영
            USER_COLEECTION.doc(currentUser.value.uid).onSnapshot((doc) => {
                store.commit('SET_USER', doc.data())
            })

            // 트윗 정보 가져오기
            TWEET_COLEECTION.where('uid', '==', currentUser.value.uid)
            .orderBy('created_at', 'desc')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach(async (change) => {
                let tweet = await getTweetInfo(change.doc.data(),  currentUser.value)

                if (change.type === 'added') {
                    tweets.value.splice(change.newIndex, 0, tweet)
                } else if (change.type === 'modified') {
                    tweets.value.splice(change.oldIndex, 1, tweet)
                } else if (change.type === 'removed') {
                    tweets.value.splice(change.oldIndex, 1)
                }
                })
            })
        })

        return {
            currentUser,
            tweets,
            moment,
        }
    }
}
</script>

<style></style>