<script setup>
import { reactive } from 'vue';
import Input from '@/components/form/Input.vue';
import '@/assets/scss/_search_page.scss';

const tab = ['전체', '클래스', '공간', '선생님'];

</script>

<template>
<div id="content">
    <section class="sch-header">
        <Input type="search" class="inp-search" name="k" placeholder="클래스 / 공간 / 선생님 검색" value="베이킹" />
        <div class="tab-title simple">
            <button :class="[{on: i == 0}, 'tab-button']" 
                v-for="(item, i) in tab">
                {{ item }}
            </button>
        </div>
    </section>
    <section class="sch-result">
        <h2 class="t-title1">총 48개의 검색결과</h2>
        <div class="sch-list">
            <div class="flex-justify">
                <h3 class="result-title">클래스</h3>
                <a href="#" class="more-arrow small">더 보기 <i class="ico-more_arrow"></i> </a>
            </div>
            <div class="list">
                <ul>
                    <!-- loop -->
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list01.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                            </figure>
                            <div class="list-content">
                                <strong class="list-tit">생크림 롤케이크</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                <p class="list-desc">
                                    <span>베이킹</span>
                                    <span>서울시 강남구</span>
                                    <span class="last">10월 2회가능</span>
                                </p>
                                <span class="price">
                                    <em>₩</em>13,500</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list02.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <strong class="list-tit">소금 버터빵</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                    <p class="list-desc">
                                        <span>베이킹</span>
                                        <span>경기도 성남시</span>
                                        <span class="last">10월 10회가능</span>
                                    </p>
                                    <span class="price">
                                        <em>₩</em>25,000</span>
                                </div>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list03.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <strong class="list-tit">에쉬레 크로와상</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                    <p class="list-desc">
                                        <span>베이킹</span>
                                        <span>서울시 마포구</span>
                                        <span class="last">11월 5회가능</span>
                                    </p>
                                    <span class="price">
                                        <em>₩</em>25,000</span>
                                </div>
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="result inp-wrap">
        <div class="sch-list">
            <div class="flex-justify">
                <h3>공간</h3>
                <a href="#" class="more-arrow small">더 보기 <i class="ico-more_arrow"></i> </a>
            </div>
            <div class="list-mypage">
                <ul>
                    <!-- loop -->
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list04.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <strong class="list-tit">마리 앤 제이</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                    <p class="list-desc">
                                        <span>카페</span>
                                        <span>서울시 마포구</span>
                                        <span class="last">10월 2회가능</span>
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list05.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <strong class="list-tit">파시다로</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                    <p class="list-desc">
                                        <span>카페</span>
                                        <span>서울시 마포구</span>
                                        <span class="last">10월 5회가능</span>
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list05.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <strong class="list-tit">소울키친</strong> <!-- [19.1.8] 삭제: multi-line2 클래스 삭제 -->
                                    <p class="list-desc">
                                        <span>카페</span>
                                        <span>서울시 마포구</span>
                                        <span class="last">10월 5회가능</span>
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="result inp-wrap">
        <div class="sch-list teacher">
            <div class="flex-justify">
                <h3>선생님</h3>
                <a href="#" class="more-arrow small">더 보기 <i class="ico-more_arrow"></i> </a>
            </div>
            <div class="list-mypage">
                <ul>
                    <!-- loop -->
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list06.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <!-- [D]: 두줄 말줄임인 경우 : multi-line2 클래스를 사용합니다.-->
                                    <strong class="list-tit multi-line2">김수아 베이킹 전문가</strong>
                                    <p class="list-desc">
                                        <span>베이킹</span>
                                        <span>서울시 마포구</span>
                                        <!-- <span>10월 2회가능</span> -->
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list07.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <!-- [D]: 두줄 말줄임인 경우 : multi-line2 클래스를 사용합니다.-->
                                    <strong class="list-tit multi-line2">조승진 베이킹 전문가</strong>
                                    <p class="list-desc">
                                        <span>베이킹</span>
                                        <span>서울시 마포구</span>
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <span class="img-wrap"><img src="/mobile/img/@temp/img-sch_list08.png" alt=""></span><!-- [18.12.19] 수정: 마크업 추가 -->
                                <div class="list-content">
                                    <!-- [D]: 두줄 말줄임인 경우 : multi-line2 클래스를 사용합니다.-->
                                    <strong class="list-tit multi-line2">홍종윤 베이킹 전문가</strong>
                                    <p class="list-desc">
                                        <span>베이킹</span>
                                        <span>서울시 마포구</span>
                                    </p>
                                </div>
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>
</template>
