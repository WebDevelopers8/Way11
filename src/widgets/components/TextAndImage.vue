<template>
  <div class="component">
    <p v-if="typeof title != 'undefined'" class="component__title">{{title}}</p>
    <span v-if="typeof text != 'undefined'" class="component__subtitle" v-html="markedText"></span>
    <a v-if="imageUrl ?? 0" :href="'https://admin.studioway11.com'+imageUrl" data-fancybox>
      <img class="component__image" :src="'https://admin.studioway11.com'+imageUrl" alt="product stats">
    </a>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {marked} from "marked";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
});

const props = defineProps<{
  title?: string,
  text?: string,
  imageUrl?: string,
}>()

const markedText = computed(() => {
  if( typeof props.text != 'undefined')
  {
    const markedText = marked.parse(props.text)
    return markedText
  }
  return ''
})

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