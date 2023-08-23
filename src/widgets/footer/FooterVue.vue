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
            <a href="#"><img src="@/shared/images/ball.svg"></a>
            <a href="#"><img src="@/shared/images/vk.svg"></a>
            <a href="#"><img src="@/shared/images/telegram.svg"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.footer {
  padding-top: 260px;
  padding-bottom: 75px;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  &__item {
    position: relative;
    padding-top: 50px;
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
    margin-top: 24px;
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
    margin-top: 24px;
    color: #5BB6F1;
    text-decoration: underline;
    font-size: 18px;
  }
  &__address {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>