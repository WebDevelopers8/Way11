<template>
  <div class="component">
    <div class="component-left">
      <span class="component-left__text">Аналитика и разработка дизайна для производственной компании. К нам обратилась производственная компания «NDA» с запросом провести аналитику их производства и найти слабые места во всех процессах происходящих в компании и предложить улучшения на основе проведенной аналитики.</span>
      <img class="lg:hidden my-[30px]" src="@/shared/images/project/imageProjects.png" alt="image">
      <span class="component-left__text mt-[32px]">По итогам проведенной системной и бизнес аналитики были выявлены следующие точки роста:
          <li class="pl-[20px]">исключить использование бумажных носителей во внутренней работе компании - оптимизировать время работы сотрудников офиса;</li>
          <li class="pl-[20px]">систематизировать и улучшить рабочие процессы, привести коммуникации в удобный формат взаимодействия;</li>
          <li class="pl-[20px]">оптимизировать работу производства</li>
          <li class="pl-[20px]">перевести отчетность каждого из производств по РФ в электронный вид</li>
          <li class="pl-[20px]">сделать удобный формат учета сырья.</li></span>
    </div>
    <div class="component-right">
      <img src="@/shared/images/project/imageProjects.png" alt="image">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.component {
  @apply flex justify-between gap-[10px] mt-[24px] lg:mt-[30px];

  &-left {
    @apply flex flex-col lg:w-[40%] w-full;

    &__text {
      @apply lg:text-[20px] text-[18px] text-[#14161F];
    }
  }

  &-right {
    @apply lg:w-[50%] lg:block hidden;
  }
}
</style>