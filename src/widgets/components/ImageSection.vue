<template>
  <div class="component">
    <p class="component__title">{{title}}</p>
    <div class="lg:h-[400px] h-[450px] lg:w-[48%] w-full mt-[24px]">
      <div v-if="urlImage ?? 0" class="h-full w-[100%] rounded-[8px]" :style="{'background-image': 'url(' + 'https://admin.studioway11.com' + urlImage + ')'}">
        <a class="flex justify-center items-center w-full h-full backdrop-blur-[8px] backdrop-brightness-[0.4] rounded-[8px]" :href="'https://admin.studioway11.com'+urlImage" data-fancybox>
          <img class="component__image rounded-[8px]" :src="'https://admin.studioway11.com'+urlImage" alt="product stats">
        </a>
      </div>
    </div>
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
    @apply w-[80%]
  }
}
</style>