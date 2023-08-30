<template>
  <div :class="{active:activeItem == id}">
    <button @click="$emit('update-activeItem', id)" :class="{active:activeItem == id}" class="points__item"></button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id:number,
  activeItem: number,
}>()

defineEmits(['update-activeItem']);

</script>

<style lang="postcss" scoped>
.points {
  transition: all 0.3s ease;
  @apply flex justify-center mt-[-35px] sm:mt-[-55px] gap-[10px] w-full;

  & div
  {
    transition: all 0.01s ease;
    @apply flex justify-center items-center w-[18px] h-[18px] relative rounded-[20px];
    &.active {
      @apply border-solid border-[#5BB6F1] border-[2px] ;
    }
  }
  &__item {
    transition: all 0.3s ease;
    @apply bg-[#989899] w-[8px] h-[8px] rounded-[12px];
    &.active
    {
      @apply bg-[#FFF]
    }
  }
}
</style>