<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" @click="$emit('close-modal')">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
        <!-- 컨텐츠(입력창 눌러도 닫기 비활성화) -->
	     <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="border-b border-gray-100 p-2 flex items-center justify-between ">
                <!-- 닫기 버튼 -->
                <button  @click="$emit('close-modal')" class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"></button>
                <!-- 트윗 버튼(화면사이즈 스몰일때)-->
                <div class="text-right sm:hidden mr-2">
                    <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
                    <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
                </div>
            </div>
        <div>
          <!-- original tweet -->
            <div class="flex px-4 pt-4 pb-3">
                <!-- 프로필 이미지 -->
                <div class="flex flex-col">
                    <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
                    <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
                </div>
                <div class="ml-2 flex-1">
                    <div class="flex space-x-2">
                        <span class="font-bold text-sm">{{ tweet.email}}</span>
                        <span class="text-gray text-sm">@{{tweet.username}}</span>
                        <span class="text-gray text-sm">{{ moment(tweet.created_at).fromNow() }}</span>
                    </div>
                    <div class="text-sm"> {{ tweet.tweet_body }}</div>
                    <div>
                        <span class="text-primary text-sm">@{{ tweet.username }}</span>
                        <span class="text-gray text-sm"> 님에게 보내는 답글</span>
                    </div>
                </div>
            </div>
            <!-- 트윗 섹션 -->
            <div class="flex px-4 pb-4">
                <!-- 프로필 이미지 -->
                <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
                <!-- 트윗 입력란  -->
                <div class="ml-2 flex-1 flex flex-col">
                    <textarea v-model="tweetBody" rows="5" placeholder="내 답글을 트윗합니다" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
                    <!-- 트윗 버튼(화면사이즈 평상시일때) -->
                    <div class="text-right hidden sm:block">
                        <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
                        <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">답글</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
    </div>
</template>

<script>
import {  ref, computed } from 'vue'
import moment from 'moment'
import store from '../store'
import {COMMENT_COLLECTION, TWEET_COLEECTION} from '../firebase'
import firebase from 'firebase'

export default {
    props: ['tweet'],
    setup(props, { emit }) {
        // 초기화
        const tweetBody = ref('')
        // 유저정보가져오기
        const currentUser = computed(() => store.state.user)
        // 트윗버튼눌렀을때
        const onCommentTweet = async () => {
            try {
            const doc = COMMENT_COLLECTION.doc()
            await doc.set({
                id: doc.id ,
                from_tweet_id: props.tweet.id,
                comment_tweet_body: tweetBody.value,
                uid: currentUser.value.uid,
                created_at: Date.now(),
            })

            await TWEET_COLEECTION.doc(props.tweet.id).update({
                // commnts를 +1 하기(frirebase공식문서 찾아보기)
                num_comments: firebase.firestore.FieldValue.increment(1),
            })
            emit('close-modal')
        } catch(e) {
            console.log('on comment tweet error:', e)
        }
    }
        // 함수반환(setup에 설정한 함수는 꼭 리턴에 등록)
        return {
            tweetBody,
            moment,
            currentUser,
            onCommentTweet,

        }
    },
}
</script>

<style></style>