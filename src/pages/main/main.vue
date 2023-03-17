<script setup>
import { reactive } from 'vue';
import Kv from '@/pages/main/keyvisual.vue';
import '@/assets/scss/main.scss';
import ListItem from '@/pages/main/mustHave.vue';
import Class from '@/data/class.json';

const cateImgUrl = ['class', 'teacher', 'place'];
const onClick = {
    more: ()=> {

    }
}


</script>

<template>
<main id="content">
    <Kv />
    <section>
        <!-- 공공의 주방 구경하기 -->
        <div class="list-area">
            <h2 class="t-title1">공공의 주방 구경하기</h2>
            <div class="list-scroll regular full-box">
                <ul>
                    <li v-for="(item, i) in cateImgUrl" :key="i">
                        <figure>
                            <img :src="$getImgUrl(`${$imgUrl}/main/img-view_${item}.png`)" alt="클래스" />
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //공공의 주방 구경하기 -->

        <!-- 놓치면 안될 클래스 -->
        <div class="list-area">
            <h2 class="t-title1">9월, 놓치면 안될 클래스</h2>
            <div class="list-scroll full-box">
                <ul>
                    <li v-for="(data, i) in Class" :key="i">
                        <ListItem 
                            url="/empty"
                            :title="data.title"
                            imgSrc="https://picsum.photos/600/410/?random"
                            :info="data.summaryInfo"
                            :price="data.price" />
                    </li>
                </ul>
            </div>
        </div>
        <!-- //놓치면 안될 클래스 -->

        <!-- 인기 클래스 -->
        <div class="list-area">
            <h2 class="t-title1">인기 클래스</h2>
            <div class="list-default">
                <ul>
                    <li v-for="(data, i) in Class" :key="i">
                        <ListItem 
                            url="/empty"
                            :title="data.title"
                            imgSrc="https://picsum.photos/600/410/?random"
                            :info="data.summaryInfo"
                            :price="data.price" />
                    </li>
                </ul>

                <div class="btn-area">
                    <!-- [D]: .btn-more에 .hide가 붙으면 사라집니다. -->
                    <button class="btn-more">더 많은 <strong>클래스</strong>가 궁금하다면?</button>
                </div>
            </div>

        </div>
        <!-- //인기 클래스 -->

    </section>
</main>    
</template>
