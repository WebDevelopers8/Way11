<template>
  <div class="container">
    <div class="project-title">
      <router-link to="/" class="project-title__link"><img src="@/shared/images/project/blackArrow.svg" alt="arrow">
      </router-link>
      <span class="project-title__name">ERP</span>
    </div>
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    <FourthComponent />
    <FifthComponent />
    <SixthComponent />
    <SeventhComponent />
    <EighthComponent />
    <NinthComponent />
  </div>
</template>

<script setup lang="ts">

import FirstComponent from "@/widgets/components/FirstComponent.vue";
import SecondComponent from "@/widgets/components/SecondComponent.vue";
import ThirdComponent from "@/widgets/components/ThirdComponent.vue";
import FourthComponent from "@/widgets/components/FourthComponent.vue";
import FifthComponent from "@/widgets/components/FifthComponent.vue";
import SixthComponent from "@/widgets/components/SixthComponent.vue";
import SeventhComponent from "@/widgets/components/SeventhComponent.vue";
import EighthComponent from "@/widgets/components/EighthComponent.vue";
import NinthComponent from "@/widgets/components/NinthComponent.vue";
</script>

<style lang="postcss" scoped>

.project {
  &-title {
    @apply flex items-center mt-[60px];

    &__link {
      @apply px-[30px];
    }

    &__name {
      @apply text-[#14161F] text-[56px];
    }
  }

}
</style>