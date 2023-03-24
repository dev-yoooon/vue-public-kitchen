<script setup>
import { reactive, ref } from 'vue';
import Input from '@/components/form/Input.vue';
import '@/assets/scss/search.scss';

const tab = ['전체', '클래스', '공간', '선생님'];
const list = {
    class: {
        active: ref(true),
        title: '클래스',
        url: '',
        item: [
            {
                thumb: '/@temp/img-sch_list01.png',
                title: '생크림 롤케이크',
                info: ['베이킹', '경기도 성남시', '10월 5회 가능'],
                price: '13,500'
            },
            {
                thumb: '/@temp/img-sch_list02.png',
                title: '소금 버터빵',
                info: ['베이킹', '경기도 성남시', '10월 10회 가능'],
                price: '25,000'
            },
            {
                thumb: '/@temp/img-sch_list03.png',
                title: '에쉬레 크로와상',
                info: ['베이킹', '서울시 마포구', '11월 5회 가능'],
                price: '25,000'
            },
        ]
    },
    place: {
        active: ref(true),
        title: '공간',
        url: '',
        item: [
            {
                thumb: '/@temp/img-sch_list04.png',
                title: '마리 앤 제이',
                info: ['카페','서울시 마포구','10월 2회가능'],
            },
            {
                thumb: '/@temp/img-sch_list05.png',
                title: '파시다로',
                info: ['카페','서울시 마포구','10월 5회가능'],
            },
        ]
    },
    teacher: {
        active: ref(true),
        title: '선생님',
        url: '',
        item: [
            {
                thumb: '/@temp/img-sch_list06.png',
                title: '김수아 베이킹 전문가',
                info: ['베이킹', '서울시 마포구'],
            },
            {
                thumb: '/@temp/img-sch_list07.png',
                title: '조승진 베이킹 전문가',
                info: ['베이킹', '서울시 마포구'],
            },
            {
                thumb: '/@temp/img-sch_list08.png',
                title: '홍종윤 베이킹 전문가',
                info: ['베이킹', '서울시 마포구'],
            },
        ]
    }
}

const onTab = (e) => {
    const idx = tab.indexOf(e.target.innerText);
    const listArr = Object.entries(list);

    listArr.forEach((el, i) => {
        const val = el[1]['active'];
        
        if( idx-1 < 0) {
            val.value = true;
        }
        else if( idx-1 == i) {
            val.value = true;
        }else{
            val.value = false;
        }
    });

}

</script>

<template>
<div id="content">
    <section class="sch-header">
        <Input type="search" class="inp-search" name="k" placeholder="클래스 / 공간 / 선생님 검색" value="베이킹" />
        <div class="tab-title simple">
            <button :class="[{on: i == 0}, 'tab-button']" 
                v-for="(item, i) in tab"
                @click="onTab">
                {{ item }}
            </button>
        </div>
    </section>
    <section class="sch-result">
        <h2 class="t-title1">총 48개의 검색결과</h2>
        <div class="sch-list" v-for="wrap in list">
            <template  v-if="wrap.active.value">
            <div class="flex-justify">
                <h3 class="result-title">{{ wrap.title }}</h3>
                <a href="#" class="more-arrow small">더 보기 <i class="ico-more_arrow"></i> </a>
            </div>
            <div class="list-horizontal">
                <ul> 
                    <li v-for="list in wrap.item">
                        <RouterLink to="/#">
                            <figure class="img-wrap">
                                <img :src="$getImgUrl(`${$imgUrl}${list.thumb}`)" alt="">
                            </figure>
                            <div class="list-content">
                                <strong class="list-tit">{{ list.title }}</strong>
                                <p class="text-info">
                                    <span v-for="tag in list.info">{{ tag }}</span>
                                </p>
                                <span class="price" v-if="list.price">
                                    <em>₩</em>{{ list.price }}</span>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            </template>
        </div>
    </section>
</div>
</template>
