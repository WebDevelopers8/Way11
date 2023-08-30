<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__item">
          <img src="@/shared/images/logo-l.png">
        </div>
        <div class="footer__item">
          <p>Way11</p>
          <a href="tel:+79371234333">+7 (937) 123-43-33</a>
          <a href="mailto:mail@studioway11.com">mail@studioway11.com</a>
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
          <span class="text-[#14161F] text-[30px] mt-[24px]">Way11</span>
          <div class="footer__social mt-[24px]">
            <a href="#"><img src="@/shared/images/icons/ball.svg"></a>
            <a href="#"><img src="@/shared/images/icons/vk.svg"></a>
            <a href="#"><img src="@/shared/images/icons/telegram.svg"></a>
          </div>
        </div>
        <div class="lg:hidden flex flex-col items-center">
          <div class="footer__address">Астрахань<br> ул. Урицкого 7, офис 217</div>
          <a href="tel:+79371234333" class="text-[18px] text-[#14161F] mt-[24px]">+7 (937) 123-43-33</a>
          <a href="mailto:mail@studioway11.com" class="text-[18px] text-[#14161F] mt-[24px]">mail@studioway11.com</a>
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

</script>

<style lang="postcss" scoped>
.footer {
  padding-top: 200px;
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
    margin-top: 10px;
    font-size: 18px;
    color: #898A8F;
  }
  &__social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 132px;
  }
  &__policy {
    display: block;
    @apply lg:mt-[8px] mt-[24px];
    color: #5BB6F1;
    text-decoration: underline;
    font-size: 18px;
  }
  &__address {
    font-size: 20px;
    line-height: 32px;
    @apply lg:text-start text-center lg:my-[0] mt-[24px];
  }
}
</style>