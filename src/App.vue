<template>
    <div class="flex h-screen">
        <!-- 왼쪽 1/4 메뉴화면 생성 -->
        <div class="w-1/4 mt-5 ml-10 flex flex-col justify-between">
            <div>
                <!-- twitter아이콘 -->
                <i class="fab fa-twitter text-3xl text-primary ml-4"></i>
                <!-- 
                    -- twitter 사이드메뉴아이콘 생성 --
                    flex-col : 플렉스 항목을 세로로 배치
                    items-start : 교차축 시작 정렬
                    rounded-full: 레이아웃을 동글게만듬
                    fa-fw : 위치고정
                    space-y-1 : 스페이스 크기
                    justify-between: 각 항목 사이에 동일한 양의 공간이 있도록 컨테이너의 기본 축을 따라 항목을 정렬
                    사이드메뉴에서 아이콘과 트윗버튼을 하나의 태그로 묶어서 아래에있는 프로필과 별개로 나누어 사이가 벌어지도록 표시하기위해
                    justify-between를 사용했다.
                -->
                <div class="flex flex-col items-start space-y-1">
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
                </div>

                <!-- tweet 버튼 생성 -->
                <div class="mr-5">
                    <button class=" mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark">
                        트윗
                    </button>
                </div>
            </div>
            <!-- 프로필 생성 -->
            <div class="mr-5 mb-3">
                <button class=" mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 flex items-center">
                    <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full">
                    <div class="ml-2">
                        <div class="text-sm font-bole">mage.com</div>
                        <div class="text-xs text-gray-500 text-left">@mage</div>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
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