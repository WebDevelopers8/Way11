<template>
  <div class="component">
    <p class="component__title">{{title}}</p>
    <span class="component__subtitle">{{text}}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string,
  text?: string
}>()
</script>

<style lang="postcss" scoped>
.component
{
  @apply mt-[56px] flex flex-col;
  &__title
  {
    line-height: 48px; /* 133.333% */
    letter-spacing: 0.36px;
    @apply text-[#14161F] text-[28px] lg:text-[36px];
  }
  &__subtitle
  {
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    @apply text-[#14161F] text-[18px] lg:text-[20px] mt-[24px] lg:mt-[32px];
  }
}
</style>