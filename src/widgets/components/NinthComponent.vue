<template>
  <div class="component">
    <div class="component-item">
      <p class="component__title">Команда</p>
      <span class="component__subtitle">Руслан С. - системный и бизнес аналитик<br>
            Никита П. - руководитель проекта<br>
            Валентин А. - бэкенд<br>
            Илья К. - фуллстэк разработчик<br>
            Ислам А. - фронтенд<br>
            Николай К. - дизайнер</span>
    </div>
    <div class="component-item">
      <p class="component__title">Стек технологий</p>
      <span class="component__subtitle">
        MongoDB, PostgreSQL<br>
        C#<br>
        TypeScript Angular<br>
        Redis<br>
        Docker</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.component {
  @apply mt-[56px] flex lg:flex-row flex-col lg:items-start items-center w-full lg:justify-between;
  &-item
  {
    @apply flex flex-col lg:w-[50%] w-full;
    &:last-child
    {
      @apply mt-[56px]
    }
  }
  &__title {
    line-height: 48px; /* 133.333% */
    letter-spacing: 0.36px;
    @apply text-[28px] lg:text-[36px] text-[#14161F];
  }

  &__subtitle {
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    @apply mt-[24px] text-[18px] lg:text-[20px] text-[#14161F];
  }
}
</style>