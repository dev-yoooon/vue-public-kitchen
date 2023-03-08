<script setup>
import { reactive } from 'vue';
import GnbSearch from './GnbSearch.vue';

const nav = [
    {
        menu1: {
            url: './',
            name: '홈',
        }
    },
    {
        menu1: {
            url: './empty',
            name: '클래스',
        },
        menu2: {
            url: './empty',
            name: '선생님',
        },
        menu3: {
            url: './empty',
            name: '공간',
        }
    },
    {
        menu1: {
            url: './empty',
            name: '공공의주방 이야기',
        },
        menu2: {
            url: './empty',
            name: '공지사항',
        },
        menu3: {
            url: './empty',
            name: '이벤트',
        },
        menu4: {
            url: './empty',
            name: '자주하는 질문',
        }
}];

const action = reactive({
    search: false,
    favorite: false,
    menu: false,
    openMenu: function(){
        this.menu = !this.menu;
    },
    openSearch: function(){
        this.search = !this.search;
    },
    closeSearch: function(val){
        action.search = val;
    },
});

</script>

<template>
<header class="gnb" :class="{'open': action.menu}">
    <div class="gnb-bar">
        <h1 class="logo" @click="action.openMenu">
            <RouterLink to="/" aria-label="홈으로 가기">
                <img src="public/logo.svg" alt="">
                <span class="arrow"></span>
            </RouterLink>
        </h1>
        <!-- [D]: 버튼의 data-pop값과 팝업 .pop-wrap의 id값은 일치되어야함 -->
        <button class="ico-gnb-search" @click="action.openSearch" aria-label="검색"></button>
        <button class="ico-gnb-favor" aria-label="좋아요"></button>
    </div>
    <Transition name="ani">
        <nav class="gnb-menu" v-if="action.menu">
            <!-- [D]: li에 active가 붙으면 하이라이트 처리됨 -->
            <ul class="menu-list" v-for="(li, i) in nav" :key="i">
                <li v-for="(item, i) in li" :key="i">
                    <RouterLink :to="{ path: item.url }">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </Transition>
    <Transition name="ani">
        <GnbSearch :isView="action.search" @update:view = "action.closeSearch"  v-if="action.search" />
    </Transition>
</header>
</template>
