<script setup>
import { reactive } from 'vue';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps({ });

</script>

<template>
<section class="kivi">
    <div class="full-box">
        <Swiper
        :loop="true"
        :pagination="{ clickable: true,  }"
        :modules="[Pagination, Autoplay]"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" >
            <SwiperSlide v-for="(item) in 4" :key="item">
                <img :src="$getImgUrl(`${$imgUrl}/@temp/img-main_kivi${item}.jpg`)" alt="" />
            </SwiperSlide>
        </swiper>
    </div>
</section>
</template>
