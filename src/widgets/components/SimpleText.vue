<template>
  <div class="component">
    <p v-if="typeof title != 'undefined'" class="component__title" v-html="markedTitle"></p>
    <span v-if="typeof text != 'undefined'" class="component__subtitle" v-html="markedText"></span>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {marked} from "marked";

const props = defineProps<{
  title?: string,
  text?: string
}>()

const markedTitle = computed(() => {
  if(typeof props.title != 'undefined')
  {
    const markedText = marked.parse(props.title)
    return markedText
  }
  return ''
})
const markedText = computed(() => {
  if(typeof props.text != 'undefined')
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