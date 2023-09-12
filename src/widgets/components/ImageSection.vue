<template>
  <div class="component">
    <p class="component__title">{{title}}</p>
    <a v-if="urlImage ?? 0" :href="'https://admin.studioway11.com'+urlImage" data-fancybox>
      <img class="component__image" :src="'https://admin.studioway11.com'+urlImage" alt="product stats">
    </a>
  </div>
</template>

<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
});

defineProps<{
  title?:string,
  urlImage?:string,
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
  &__image
  {
    @apply xl:w-[48%] lg:w-[45%] mt-[24px]
  }
}
</style>