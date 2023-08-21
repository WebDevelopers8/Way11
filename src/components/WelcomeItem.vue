<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply mt-8 flex;
}

.details {
  @apply flex-1 ml-4;
}

i {
  @apply flex place-items-center place-content-center w-[32px] h-[32px] text-[var(--color-text)];
}

h3 {
  @apply text-[1.2rem] font-semibold mb-[0.4rem] text-[var(--color-heading)];
}

@media (min-width: 1024px) {
  .item {
    @apply mt-0 pt-[0.4rem] pb-4 pl-[calc(var(--section-gap)/2)];
  }

  i {
    @apply top-[calc(50%-25px)] -left-[26px] absolute border border-[var(--color-border)] bg-[var(--color-background)] rounded-[8px] w-[50px] h-[50px];
  }

  .item:before {
    @apply content-[''] border-l border-[var(--color-border)] absolute left-0 bottom-[calc(50%+25px)] h-[calc(50%-25px)];
  }

  .item:after {
    @apply content-[''] border-l border-[var(--color-border)] absolute left-0 top-[calc(50%+25px)] h-[calc(50%-25px)];
  }

  .item:first-of-type:before {
    @apply hidden;
  }

  .item:last-of-type:after {
    @apply hidden;
  }
}
</style>
