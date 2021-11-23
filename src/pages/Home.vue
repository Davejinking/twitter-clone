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
                <img src="http://picsum.photos/200" 
                    class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">

                <!-- 메세지 화면 --> 
                <div class="ml-2 flex-1 flex flex-col">
                    <!-- 메세지 입력란 --> 
                    <textarea
                        placeholder="무슨 일이 일어나고 있나요?"
                        class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
                    ></textarea>
                    <!-- 트윗버튼 --> 
                    <div class="text-right">
                        <button class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
                    </div>
                </div>
            </div>

            <!-- 트윗 내용 --> 
            <div 
                class="flex px-3 py-3 border-b border-gray-100"
                v-for="tweet in 10" :key="tweet"
            >
                <!-- 프로필 이미지 --> 
                <img 
                    src="http://picsum.photos/200" 
                    class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
                >

                <!-- 트윗 입력란--> 
                <div class="ml-3 flex-1 flex flex-col space-y-1">
                    <!-- 프로필 상세내용--> 
                    <div class="text-sm space-x-1">
                        <span class="font-bold">윤마게</span>
                        <span class="text-gray-500 text-xs">@younMage</span>
                        <span>.</span>
                        <span class="text-gray-500 text-xs">7분</span>
                    </div>
                    <!-- 트윗내용 --> 
                    <div>
                        누구인가? 누가 기침소리를 내었는가 말인가?
                        누구인가? 누가 기침소리를 내었는가 말인가?
                        누구인가? 누가 기침소리를 내었는가 말인가?
                        누구인가? 누가 기침소리를 내었는가 말인가?
                    </div>
                    <!-- 트윗 액션 아이콘--> 
                    <div class="flex justify-between">
                        <!-- 코멘트아이콘 -->
                        <div class="text-gray-500 hover:text-primary">
                            <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                            <span class="ml-1  text-sm">1</span>
                        </div>
                        <!-- 리트윗아이콘 -->
                        <div class="text-gray-500 hover:text-green-500">
                            <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
                            <span class="ml-1  text-sm">2</span>
                        </div>
                        <!-- 하트아이콘 -->
                        <div class="text-gray-500 hover:text-red-500">
                            <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
                            <span class="ml-1  text-sm">3</span>
                        </div>
                        <!-- 전송아이콘 -->
                        <div class="text-gray-500 hover:text-primary">
                            <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 트렌드 섹션  --> 
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
    components: { Trends },
}
</script>

<style>

</style>