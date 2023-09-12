<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__item">
          <img src="@/shared/images/logo-l.png">
        </div>
        <div class="footer__item">
          <p>Way11</p>
          <a class="block" :href="'tel:' + phone">{{phone}}</a>
          <a :href="'mailto:'+ mail">{{mail}}</a>
          <div class="footer__rights">© 2023 Digital-агентство Way11</div>
        </div>
        <div class="footer__item">
          <div class="footer__address">Астрахань<br> ул. Урицкого 7, офис 217</div>
          <a href="#" class="footer__policy">Политика конфиденциальности</a>
        </div>
        <div class="footer__item">
          <div class="footer__social">
            <a href="#"><img src="@/shared/images/icons/ball.svg"></a>
            <a href="#"><img src="@/shared/images/icons/vk.svg"></a>
            <a href="#"><img src="@/shared/images/icons/telegram.svg"></a>
          </div>
        </div>
<!--        mobile-->
        <div class="lg:hidden flex justify-center">
          <img src="@/shared/images/logo-l.png">
        </div>
        <div class="lg:hidden flex flex-col items-center">
          <span class="text-[#14161F] leading-[40px] text-[30px] mt-[8px]">Way11</span>
          <div class="footer__social mt-[24px]">
            <a href="#"><img src="@/shared/images/icons/ball.svg"></a>
            <a href="#"><img src="@/shared/images/icons/vk.svg"></a>
            <a href="#"><img src="@/shared/images/icons/telegram.svg"></a>
          </div>
        </div>
        <div class="lg:hidden flex flex-col items-center">
          <div class="footer__address">Астрахань<br> ул. Урицкого 7, офис 217</div>
          <a :href="'tel:' + phone" class="leading-[24px] font-normal text-[#14161F] mt-[24px]">{{phone}}</a>
          <a :href="'mailto:'+ mail" class="text-[18px] leading-[24px] text-[#14161F] mt-[24px]">{{mail}}</a>
        </div>
        <div class="lg:hidden flex flex-col items-center">
          <a href="#" class="footer__policy">Политика конфиденциальности</a>
          <div class="footer__rights">© 2023 Digital-агентство Way11</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {responseContact} from "@/app/http/request";

let mail = ref('')
let phone = ref('')

async function getContacts()
{
  let response = await responseContact();
  mail.value = response.data.attributes.email;
  phone.value = response.data.attributes.phone;
}
getContacts()
</script>

<style lang="postcss" scoped>
.footer {
  padding-top: 100px;
  padding-bottom: 75px;
  &__wrapper {
    grid-template-columns: repeat(4, 1fr);
    @apply lg:grid lg:gap-[30px] flex flex-col ;
  }
  &__item {
    position: relative;
    padding-top: 50px;
    @apply lg:block hidden;
    &:first-child {
      padding-top: 0;
    }
    p {
      position: absolute;
      top: -10px;
      font-size: 36px;
      margin-bottom: 16px;
    }
    a {
      font-size: 20px;
      line-height: 32px;
    }
  }
  &__rights {
    color: #898A8F;
    @apply lg:mt-[24px] mt-[16px] lg:text-[18px] text-[16px] leading-[24px]
  }
  &__social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 132px;
  }
  &__policy {
    display: block;
    @apply lg:mt-[24px] mt-[32px] leading-[24px] lg:text-[18px] text-[16px];
    color: #5BB6F1;
    text-decoration: underline;
  }
  &__address {
    @apply lg:leading-[32px] lg:text-[20px] text-[18px] leading-[24px] font-normal lg:text-start text-center lg:my-[0] mt-[24px];
  }
}
</style>