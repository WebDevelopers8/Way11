<template>
  <div class="number">
    <button :class="{active: numberPage == currPage}" @click="emit('updatePage', numberPage)">
      <div :class="{active: numberPage == currPage}">{{numberPage}}</div>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numberPage: number,
  currPage: number
}>()

const emit = defineEmits(['updatePage'])
</script>

<style lang="postcss" scoped>
.number {
  @apply flex justify-between ;

  & button {
    position: relative;
    height: 58px;
    background-color: transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-18deg);
    border: 1.5px solid transparent;
    transition: all .2s ease;
    @apply sm:w-[86px] w-[60px];

    &.active {
      border: 1.5px solid #438CB4;
    }

    div {
      color: #438CB4;
      transform: skew(18deg);
      position: absolute;
      top: 20%;
      left: 45%;
      @apply absolute text-[#000] text-[22px];

      &.active {
        @apply text-[#438CB4] text-[22px];
      }

      img {
        width: 19px;
        height: 20px;
      }
    }
  }
}
</style>