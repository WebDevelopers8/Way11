<template>
  <div class="component">
    <p class="component__title">Статистика и KPI</p>
    <span class="component__subtitle">Руководству было критически важно понимать выработку по каждому отделу и сотруднику внутри отдела. Поэтому был реализован весь необходимый функционал для подсчета статистики и KPI.</span>
    <img class="component__image" src="@/shared/images/project/prodStatic.png" alt="product stats">
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
    @apply w-[48%] mt-[24px]
  }
}
</style>