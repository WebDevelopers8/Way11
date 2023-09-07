<template>
  <div class="component">
    <p v-if="typeof title != 'undefined'" class="component__title">{{title}}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
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
    @apply text-[#14161F] text-[24px] lg:text-[28px];
  }
  &__images
  {
    @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[24px] gap-[20px];
    & img
    {
      @apply 2xl:w-auto lg:w-[45%]
    }
  }
}
</style>