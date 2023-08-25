<template>
  <div class="component">
    <p class="component__title">Страница городов</p>
    <span class="component__subtitle">Была разработана страница городов, где отображены города, в которых ведется деятельности компании и основные метрики.</span>
    <img class="component__image" src="@/shared/images/project/cityPage.png" alt="city page">
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.component
{
  @apply mt-[56px] flex flex-col;
  &__title
  {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[28px] text-[#14161F];
  }
  &__subtitle
  {
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    @apply mt-[24px] text-[20px] text-[#14161F];
  }
  &__image
  {
    @apply xl:w-[48%] lg:w-[45%] mt-[24px]
  }
}
</style>