<template>
  <div class="item">
    <span class="item__text">{{text}}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style lang="postcss" scoped>
.item
{
  @apply flex items-center justify-center rounded-[5px] px-[20px] py-[8px] border-[1px] border-solid border-[#787878];
  &__text
  {
    line-height: 24px;
    @apply lg:tracking-[0.18px] tracking-[0.16px] text-[16px] lg:text-[18px] text-[#14161F] flex-grow-[1];
  }
}
</style>