<template>
  <div class="component">
    <div class="component-left">
      <p class="component-left__title">{{ leftTitle }}</p>
      <span class="component-left__text">{{leftText}}</span>
    </div>
    <div class="component-right">
      <p class="component-right__title">{{rightTitle}}</p>
      <span class="component-left__text">{{rightText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  leftTitle?: string,
  leftText?: string,
  rightText?: string,
  rightTitle?: string
}>()
</script>

<style lang="postcss" scoped>
.component {
  @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[56px] gap-[40px];

  &-left {
    @apply flex flex-col w-full lg:w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[28px] lg:text-[36px];
    }

    &__text {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[18px] lg:text-[20px] mt-[24px] lg:mt-[32px];
    }
  }

  &-right {
    @apply flex flex-col w-full lg:w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[28px] lg:text-[36px];
    }

    &__li {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[18px] lg:text-[20px];

      & span {
        @apply text-[#898A8F];
      }
    }
  }
}
</style>