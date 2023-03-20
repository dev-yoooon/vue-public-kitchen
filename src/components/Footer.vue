<script setup>
import { reactive } from 'vue';

const list = {
    privacy: [
        { name: '제휴문의', url: '/empty' },
        { name: '이용약관', url: '/empty' },
        { name: '개설자약관', url: '/empty' },
        { name: '개인정보처리방침', url: '/empty' },
        { name: '공공의주방 회사소개', url: '/empty' },
    ],
    info: [
        { title: '상호명', content: '주식회사 공공의주방' },
        { title: '대표', content: '안상미' },
        { title: '개인정보책임자', content: '안상미' },
        { title: '사업자등록번호', content: '368-81-00400' },
        { title: '통신판매신고번호', content: '제 2017년-서울강남-03388호' },
        { title: '주소', content: '경기도 성남시 수정구 대왕판교로 815 7층 G-759호' },
        { title: '대표번호', content: '1800-5910' },
        { title: '이메일', content: 'contact@public-kitchen.com' },
    ]
}

</script>

<template>
<footer class="footer">
    <div class="logo"><img src="@/assets/img/footer-logo.png" alt=""></div>
    <ul class="footer-privacy">
        <li v-for="(item, i) in list.privacy" :key="i">
            <RouterLink :to="{ path: item.url }">{{ item.name }}</RouterLink>
        </li>
    </ul>
    <ul class="footer-info">
        <li v-for="(item, i) in list.info" :key="i">
            <span class="title">{{ item.title }}</span>
            <strong class="name">{{ item.content }}</strong>
        </li>
    </ul>
    <div class="footer-copy">
        <p class="desc">(주)공공의주방은 통신판매중개자이며 통신판매 당사자가 아닙 니다. 따라서 클래스/공간정보, 거래 및 판매에 대하여 책임을 지지 않습니다.</p>
        <p class="copy">&copy; 공공의주방. <span>All Rights Reserved.</span></p>
        <div class="sns">
            <a href="#" target="_blank" class="facebook" aria-label="facebook"></a>
            <a href="#" target="_blank" class="instagram" aria-label="instagram"></a>
        </div>
    </div>
</footer>
</template>
