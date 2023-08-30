<template>
  <div v-if="activeItem == id" :class="{active:activeItem == id}" class="image">
    <img :src="url">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number,
  url: string,
  activeItem: number,
}>()

</script>

<style lang="postcss" scoped>
.image {
  animation-duration: 0.5s;
  transition: all 0.5s ease;
  transform: translateX(-100px);
  @apply opacity-0 ml-[-200px] w-[100%] left-0 flex justify-center;

  & img {
    @apply w-[100%] object-cover;
  }

  &.active {
    transform: translateX(0);
    @apply opacity-100 ml-[0] flex;
  }
}
</style>