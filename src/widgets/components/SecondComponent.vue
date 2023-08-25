<template>
  <div class="component">
    <div class="component-left">
      <p class="component-left__title">Сложности</p>
      <span class="component-left__text">Масштаб аналитической работы и сжатые сроки, в которые необходимо было успеть провести анализ огромного предприятия с филиалами и контрагентами по всей РФ. Сложный и запутанный производственный процесс. Безопасность. Компания относится к стратегическим производствам РФ с серьезными требованиями к конфиденциальности данных.</span>
    </div>
    <div class="component-right">
      <p class="component-right__title">Этапы работы</p>
      <li class="component-right__li mt-[32px]">Аналитика - <span>сбор информации и требований заказчика к будущей системе; анализ процессов, происходящих в офисе и на производстве</span>
      </li>
      <li class="component-right__li">техническое задание -<span>написание технического задания на основе проведенной аналитики и собранных требований</span>
      </li>
      <li class="component-right__li">прототипирование будущей системы</li>
      <li class="component-right__li">создание полноценного дизайн-интерфейса системы.</li>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.component {
  @apply flex justify-between mt-[56px] gap-[40px];

  &-left {
    @apply flex flex-col w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[36px];
    }

    &__text {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[20px] mt-[32px];
    }
  }

  &-right {
    @apply flex flex-col w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[36px];
    }

    &__li {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[20px];

      & span {
        @apply text-[#898A8F];
      }
    }
  }
}
</style>