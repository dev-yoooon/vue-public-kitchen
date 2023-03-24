<script setup>
import { reactive } from 'vue';
import Input from '@/components/form/Input.vue';

const props = defineProps({
    isView: {
        type: Boolean,
        required: true,
        dafult: false
    }
})

const emit = defineEmits([ 'update:view' ])
const popClose = () => {
    const update = !props.isView;
    emit('update:view', update);
}

const search = reactive({
    recent: [
        {name: '파스타', url: '/empty'},
        {name: '일식 혼밥', url: '/empty'},
        {name: '집들이 음식', url: '/empty'},
    ],
    tag: [
        {name: '베이킹'},
        {name: '초보'},
        {name: '파티음식'},
        {name: '혼밥'},
        {name: '집들이'},
        {name: '간식'},
    ],
    recentDelete: function(i){
        this.recent.splice(i,1);
    }
})

const isRecent = reactive({
    value: true,
    allDelete: false,
    offRencent: function(){
        this.value = !this.value;
    },
    deleteAll: function(){
        search.recent = [];
    }
})

</script>

<template>
<div class="pop-wrap" v-if="props.isView">
    <div class="pop-cont">
        <form action="/search">
            <Input type="search" name="k" class="inp-search" placeholder="클래스 / 공간 / 선생님 검색" title="클래스 / 공간 / 선생님 검색" />
            <div class="search-list">
                <div class="list-wrap">
                    <!-- [D]: 검색어 기능이 켜져있을 때-->
                    <ul v-if="isRecent.value">
                        <li v-for="(recent, i) in search.recent" :key="i">
                            <RouterLink :to="{path: recent.url}">{{ recent.name }}</RouterLink>
                            <button type="button" class="btn-del" aria-label="삭제" @click="search.recentDelete(i)"></button>
                        </li>
                    </ul>
                    <!-- //[D]: 검색어 기능이 켜져있을 때-->

                    <!-- [D]: 검색어 기능이 꺼져있을 때 (추가시 .hidden은 삭제해주세요.)-->
                    <p class="empty-text" 
                        :class="{'hidden': isRecent.value}" v-if="!isRecent.value">
                        최근 검색어 기능이 꺼져있습니다.
                    </p>
                    <!-- [D]: 전체 삭제할 때 -->
                    <p class="empty-text" :class="{'hidden': isRecent.allDelete}" v-if="search.recent.length == 0 && isRecent.value">
                        최근 검색 내용이 없습니다.
                    </p>
                </div>
                <div class="btn-wrap">
                    <button type="button" class="latest" @click="isRecent.offRencent">
                        <span v-if="isRecent.value">최근 검색어 끄기</span>
                        <span v-else>최근 검색어 켜기</span>
                    </button>
                    <button type="button" class="del-all" @click="isRecent.deleteAll">전체 삭제</button>
                </div>
            </div>
            <div class="hash-tag">
                <strong class="t-title4">인기 키워드</strong>
                <button type="button" v-for="(link, i) in search.tag" :key="i">#{{ link.name }}</button>
            </div>
        </form>
    </div>
    <button class="pop-btn-close" @click="popClose" aria-label="닫기"></button>
</div>
</template>
