<script setup>
import { reactive } from 'vue';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import 'swiper/css/pagination';

const props = defineProps({
});

const onSwiper = (swiper) => {
    console.log(swiper);
}


</script>

<template>
<section class="kivi">
    <div class="full-box">
        <Swiper
        @swiper="onSwiper"
        :loop="true"
        :pagination="{ clickable: true,  }"
        :modules="[Pagination]"
        >
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></SwiperSlide>
        </swiper>
    </div>
    <!-- <div class="swiper-container full-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a href="#"><img src="@/assets/img/@temp/img-main_kivi1.jpg" alt="" /></a></div>
            <div class="swiper-slide"><a href="#"><img src="@/assets/img/@temp/img-main_kivi2.jpg" alt="" /></a></div>
            <div class="swiper-slide"><a href="#"><img src="@/assets/img/@temp/img-main_kivi3.jpg" alt="" /></a></div>
            <div class="swiper-slide"><a href="#"><img src="@/assets/img/@temp/img-main_kivi4.jpg" alt="" /></a></div>
            <div class="swiper-slide"><a href="#"><img src="@/assets/img/@temp/img-main_kivi5.jpg" alt="" /></a></div>
        </div>
        <div class="swiper-pagination"></div>
    </div> -->
</section>
</template>
