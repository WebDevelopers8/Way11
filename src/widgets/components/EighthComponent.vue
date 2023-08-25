<template>
  <div class="component">
    <p class="component__title">Опросы и голосования</p>
    <img class="component__image" src="@/shared/images/project/Vote.png" alt="product stats">
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
  &__image
  {
    @apply xl:w-[48%] lg:w-[45%] mt-[24px]
  }
}
</style>