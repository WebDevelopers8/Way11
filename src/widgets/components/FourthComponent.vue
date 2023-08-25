<template>
  <div class="component">
    <p class="component__title">Интерфейс сервиса</p>
    <span class="component__subtitle">Таск-трекер</span>
    <span class="component__description">В ходе аналитики было выявлено, что на предприятии нарушен процесс коммуникации из-за которого возникает множество различных сложностей, включая дублирование документов, потерю документов, не понимание загруженности сотрудников, не понимание актуальных задач и вечные перебежки между отделами для выяснения актуальности поставленных задач и статуса подписания докуменов. Мы решили закрыть эту часть проблем реализаций таск-трекера и совмещенного с ним документооборота, заточенного под нужды офиса и производства.</span>
    <div class="component-images">
      <img src="@/shared/images/project/trackImage.png" alt="track image">
      <img src="@/shared/images/project/docImage.png" alt="document image">
    </div>
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
    line-height: 48px; /* 133.333% */
    letter-spacing: 0.36px;
    @apply text-[#14161F] text-[48px];
  }
  &__subtitle
  {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[#14161F] text-[28px] mt-[32px];
  }
  &__description
  {
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    @apply text-[#14161F] text-[20px] mt-[24px];
  }
  &-images
  {
    @apply flex justify-between mt-[24px];
  }
}
</style>