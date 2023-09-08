<template>
  <div v-for="(item,index) in componentItems" :key="index">
    <TwoTextColumns v-if="'project-component.two-text-columns' == item.__component" :leftText="item.leftText" :leftTitle="item.leftTitle" :rightTitle="item.rightTitle" :rightText="item.rightText" />
    <SimpleText v-if="'project-component.simple-text' == item.__component" :title="item.title" :text="item.text" />
    <TwoImages v-if="'project-component.two-images' == item.__component" :title="item.title" :leftImage="item.leftImage?.data.attributes.url" :rightImage="item.rightImage?.data.attributes.url"  />
    <TextAndImage v-if="'project-component.text-and-image' == item.__component" :title="item.title" :text="item.text" :imageUrl="item.image?.data.attributes.url" />
<!--    <SeventhComponent />-->
    <OnlyTitle v-if="'project-component.only-title' == item.__component" :title="item.title"/>
    <ImageSection v-if="'project-component.image-section' == item.__component" :title="item.title" :urlImage="item.image?.data.attributes.url" />
  </div>
</template>

<script setup lang="ts">
import TextAndImage from "@/widgets/components/TextAndImage.vue";
import ImageSection from "@/widgets/components/ImageSection.vue";
import TwoImages from "@/widgets/components/TwoImages.vue";
import SimpleText from "@/widgets/components/SimpleText.vue";
import TwoTextColumns from "@/widgets/components/TwoTextColumns.vue";
import type {bodyInterface} from "@/entities/dto/projects/bodyInterface";
import OnlyTitle from "@/widgets/components/OnlyTitle.vue";

defineProps<{
  componentItems: Array<bodyInterface> | null
}>()
</script>

<style lang="postcss" scoped>

</style>