<template>
  <div v-for="(item,index) in componentItems" :key="index">
<!--    <FirstComponent />-->
    <SecondComponent v-if="'project-component.two-text-columns' == item.__component" :leftText="item.leftText" :leftTitle="item.leftTitle" :rightTitle="item.rightTitle" :rightText="item.rightText" />
    <ThirdComponent v-if="'project-component.simple-text' == item.__component" :title="item.title" :text="item.text" />
<!--    <FourthComponent />-->
<!--    <FifthComponent />-->
    <SixthComponent v-if="'project-component.text-and-image' == item.__component" :title="item.title" :text="item.text" :imageUrl="item.urlImage" />
<!--    <SeventhComponent />-->
    <EighthComponent v-if="'project-component.image-section' == item.__component" :title="item.title" :urlImage="item.urlImage" />
<!--    <NinthComponent />-->
  </div>
</template>

<script setup lang="ts">
import NinthComponent from "@/widgets/components/NinthComponent.vue";
import SixthComponent from "@/widgets/components/SixthComponent.vue";
import EighthComponent from "@/widgets/components/EighthComponent.vue";
import FifthComponent from "@/widgets/components/FifthComponent.vue";
import SeventhComponent from "@/widgets/components/SeventhComponent.vue";
import ThirdComponent from "@/widgets/components/ThirdComponent.vue";
import FourthComponent from "@/widgets/components/FourthComponent.vue";
import FirstComponent from "@/widgets/components/FirstComponent.vue";
import SecondComponent from "@/widgets/components/SecondComponent.vue";
import type {bodyInterface} from "@/entities/dto/projects/bodyInterface";

defineProps<{
  componentItems: Array<bodyInterface> | null
}>()
</script>

<style lang="postcss" scoped>

</style>