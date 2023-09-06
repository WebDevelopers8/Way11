<template>
  <div class="component">
    <p class="component__title">{{title}}</p>
    <span class="component__subtitle">{{text}}</span>
    <img v-if="imageUrl ?? 0" class="component__image" :src="'https://admin.studioway11.com/' + imageUrl" alt="product stats">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  text: string,
  imageUrl?: string,
}>()
</script>

<style lang="postcss" scoped>
.component
{
  @apply mt-[56px] flex flex-col;
  &__title
  {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[24px] lg:text-[28px] text-[#14161F];
  }
  &__subtitle
  {
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    @apply mt-[24px] text-[18px] lg:text-[20px] text-[#14161F];
  }
  &__image
  {
    @apply xl:w-[48%] lg:w-[45%] mt-[24px];
  }
}
</style>