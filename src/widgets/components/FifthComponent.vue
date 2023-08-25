<template>
  <div class="component">
    <p class="component__title">Документооборот</p>
    <div class="component__images">
      <img src="@/shared/images/project/docList.png" alt="document list">
      <img src="@/shared/images/project/sendDoc.png" alt="send document">
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
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[#14161F] text-[28px];
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