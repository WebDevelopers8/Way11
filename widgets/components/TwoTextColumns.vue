<template>
  <div class="component">
    <div class="component-left">
      <p v-if="typeof leftTitle != 'undefined'" class="component-left__title" v-html="leftMarkedTitle"></p>
      <span v-if="typeof leftText != 'undefined'" class="component-left__text" v-html="leftMarkedText"></span>
    </div>
    <div class="component-right">
      <p v-if="typeof rightTitle != 'undefined'" class="component-right__title" v-html="rightMarkedTitle"></p>
      <span v-if="typeof rightText != 'undefined'" class="component-left__text" v-html="rightMarkedText"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {marked} from "marked";
import {computed} from "vue";

const props = defineProps<{
  leftTitle?: string,
  leftText?: string,
  rightText?: string,
  rightTitle?: string
}>()

const leftMarkedText = computed(() => {
  if( typeof props.leftText != 'undefined')
  {
    const markedText = marked.parse(props.leftText)
    return markedText
  }
  return ''
})
const leftMarkedTitle = computed(() => {
  if( typeof props.leftTitle != 'undefined')
  {
    const markedText = marked.parse(props.leftTitle)
    return markedText
  }
  return ''
})
const rightMarkedTitle = computed(() => {
  if( typeof props.rightTitle != 'undefined')
  {
    const markedText = marked.parse(props.rightTitle)
    return markedText
  }
  return ''
})
const rightMarkedText = computed(() => {
  if( typeof props.rightText != 'undefined')
  {
    const markedText = marked.parse(props.rightText)
    return markedText
  }
  return ''
})


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