<template>
  <div>
    <img class="w-full" src="@/shared/images/notFound/header.png">
    <div class="container">
      <div class="flex flex-col items-center mt-[40px]">
        <p class="text-[#14161F] text-[36px] leading-[48px]">Вы тоже это видите?</p>
        <span class="w-[60%] text-[#14161F] text-[20px] leading-[32px] mt-[28px]">Как будто бы здесь что-то было раньше. Поробуйте перезагрузить страницу или свяжитесь с нами другим способом, если у вас есть интересный проект.</span>
        <div class="button-error">
          <button class="outline" @click="reload()">
            <div>Перезагрузить</div>
          </button>
        </div>
        <div class="flex gap-[24px] mt-[48px]">
          <a href=""><img src="@/shared/images/icons/ball.svg"></a>
          <a href=""><img src="@/shared/images/icons/vk.svg"></a>
          <a href=""><img src="@/shared/images/icons/telegram.svg"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

function reload() {
  location.reload()
}
</script>

<style lang="postcss" scoped>
.button-error {
  @apply flex w-full justify-between items-center flex-col mt-[48px];

  button {
    position: relative;
    width: 100%;
    height: 58px;
    background-color: #5BB6F1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-18deg);
    border: 1px solid #438CB4;
    border-right: 5px solid #438CB4;
    border-bottom: 5px solid #438CB4;
    transition: all .2s ease;
    @apply w-[300px] sm:mt-[0] mt-[13px];

    &:hover {
      transform: skew(-18deg) translateY(2px);
      border-right: 1px solid #438CB4;
      border-bottom: 1px solid #438CB4;
    }

    &.outline {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        color: #438CB4;
        @apply sm:top-[12px];
      }
    }

    div {
      position: absolute;
      font-weight: 300;
      color: #fff;
      transform: skew(18deg);
      @apply lg:text-[22px] text-[18px];
    }
  }
}
</style>