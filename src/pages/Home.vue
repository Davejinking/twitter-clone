<template>
    <!-- 메인 섹션(외부) --> 
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
        <!-- 메인 섹션(내부) --> 
        <div class="flex flex-col">
            <!-- 메인 타이틀(home) --> 
            <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>

            <!-- 트위팅 섹션(메세지 입력) --> 
            <div class="flex px-3 py-3 border-b-8 border-gray-100">
                <!-- 프로필 이미지 --> 
                <img :src="currentUser.profile_image_url"
                    class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">

                <!-- 메세지 화면 --> 
                <div class="ml-2 flex-1 flex flex-col">
                    <!-- 메세지 입력란 --> 
                    <textarea v-model="tweetBody"
                        placeholder="무슨 일이 일어나고 있나요?"
                        class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
                    ></textarea>
                    <!-- 트윗버튼 --> 
                    <div class="text-right">
                        <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                        <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                    </div>
                </div>
            </div>

            <!-- 트윗 내용 --> 
            <Tweet v-for="tweet in 5" key:="tweet" :currentUser="currentUser" />
        </div>
    </div>
    <!-- 트렌드 섹션  --> 
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
import { ref, computed } from 'vue'
import store from '../store'
import { TWEET_COLEETION } from '../firebase'

export default {
    components: { Trends, Tweet },
    setup() {
        const tweetBody = ref('')
        const currentUser = computed(() => store.state.user)

        const onAddTweet = async () => {
            try{
                const doc = TWEET_COLEETION.doc()
                await doc.set({
                    id: doc.id,
                    tweet_body: tweetBody.value,
                    uid: currentUser.value.uid,
                    created_at: Date.now(),
                    num_comments: 0,
                    num_retweets: 0,
                    num_likes: 0,
                })
                tweetBody.value = ''
            } catch (e) {
                console.log('on add tweet error on homepage:', e)
            }
        }

        return { currentUser, tweetBody, onAddTweet }
    },
}
</script>

<style>

</style>