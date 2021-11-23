<template>
  <div class="flex-1 border-f border-gray-100 flex flex-col overflow-y-auto">
    <!-- 타이틀 -->
    <div class="p-3 font -bold text-lg border-b border-gray-100">알림</div>      
    <!-- notifications -->
    <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer"
    v-for="notification in 10" :key="notification"
    >
        <div class="flex justify-between">
            <img 
                src="http://picsum.photos/100" 
                class="w-10 h-10 rounded-full hover:opacity-80"
            />
            <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
        </div>
        <div>
            <span class="font-bold">야마자키홍</span> 님의 최근 트윗
        </div>
        <div class="text-gray-500">
            야마자키현에서 온 야마자키홍 입니다
            잘 부탁드립니다
            영원한 17살 야마자키홍 영원하라!
            영원한 17살 야마자키홍 영원하라!
            영원한 17살 야마자키홍 영원하라!
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>