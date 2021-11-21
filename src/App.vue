<template>
    <div class="flex h-screen">
        <!-- 왼쪽 1/4 메뉴화면 생성 -->
        <div class="w-1/4 mt-5 ml-10 ">
            <!-- twitter아이콘 -->
            <i class="fab fa-twitter text-2xl text-primary ml-4"></i>
            <!-- twitter 사이드메뉴아이콘 생성
                flex-col : 플렉스 항목을 세로로 배치
                items-start : 교차축 시작 정렬
                rounded-full: 레이아웃을 동글게만듬
                fa-fw : 위치고정
            -->
            <div class="flex flex-col items-start">
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-home fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">홈</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-hashtag  fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">탐색하기</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-bell fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">알림</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-envelope fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">쪽지</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-bookmark fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">북마크</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-list-alt fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">리스트</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-user fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">프로필</span>
                </div>
                <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                    <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
                    <span class="ml-3 text-lg">더 보기</span>
                </div>

                <!-- tweet 버튼 생성 -->
                <button class=" mt-3 bg-primary text-white w-60 h-12 rounded-full hover:bg-dark">
                    Tweet
                </button>
            </div>
        </div>
        <!-- 나머지 메인화면 생성 -->
        <div class="flex-1 bg-red-200"></div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>