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
        lg:block : lg크기일때 블록으로 만든다
        lg:flex : lg크기일때 플렉스로 만든다
        fa-plus : 플러스 아이콘
        border-r : 
        border-gray-100 :
-->
<template>
    <div class="flex h-screen">
        <!-- 사이드 메뉴 -->
        <div class="w-1/4 pt-5 ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-center lg:items-start">
                <!-- twitter아이콘 -->
                <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
                <!-- 사이드메뉴 -->
                <div class="flex flex-col items-start space-y-1">
                    <!-- 홈 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-home fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">홈</span>
                    </div>
                    <!-- 탐색하기 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-hashtag  fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">탐색하기</span>
                    </div>
                    <!-- 알림 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-bell fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">알림</span>
                    </div>
                    <!-- 쪽지 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-envelope fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">쪽지</span>
                    </div>
                    <!-- 북마크 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-bookmark fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">북마크</span>
                    </div>
                    <!-- 리스트 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-list-alt fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">리스트</span>
                    </div>
                    <!-- 프로필 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-user fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">프로필</span>
                    </div>
                    <!-- 더 보기 -->
                    <div class="hover:text-primary hover:bg-bule-50 px-4 py-2 rounded-full">
                        <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
                        <span class="ml-3 text-lg hidden lg:inline-block">더 보기</span>
                    </div>
                </div>

                <!-- tweet 버튼 -->
                <div class="w-full lg:pr-3 flex justify-center">
                    <button class=" mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark">
                        <span class="hidden lg:block">트윗</span>
                        <i class="fas fa-plus lg:hidden"></i>
                    </button>
                </div>
            </div>

            <!-- 프로필 화면 -->
            <div class="lg:pr-3 mb-3">
                <!-- 프로필 이미지(화면 크기 기본형) -->
                <button class="hidden lg:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center">
                    <!-- 프로필 이미지 -->
                    <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full">

                    <!-- 프로필 상세내용(메일,이름) -->
                    <div class="ml-2 hidden lg:block">
                        <div class="text-sm font-bole">mage.com</div>
                        <div class="text-xs text-gray-500 text-left">@mage</div>
                    </div>

                    <!-- 프로필(옵션) -->
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"></i>
                </button>

                <!-- 프로필 이미지(화면 크기 반응형) -->
                <div class="lg:hidden flex justify-center">
                    <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80">
                </div>
            </div>
        </div>

        <!-- 메인 메뉴 --> 
        <div class="flex-1">
            <div class="flex h-screen">
                <!-- 메인 섹션(외부) --> 
                <div class="flex-1 border-r border-gray-100">
                    <!-- 메인 섹션(내부) --> 
                    <div class=" flex flex-col">
                        <!-- 메인 타이틀(home) --> 
                        <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
                            홈
                        </div>

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
                                    class="w-full text-lg font-bold focus:outline-none mb-3 resize-none">
                                </textarea>

                                <!-- 트윗버튼 --> 
                                <div class="text-right">
                                    <button class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-2 rounded-full">트윗</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 트렌드 섹션  --> 
                <div class="w-2/5">trend</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>