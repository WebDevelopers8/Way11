<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from "@/widgets/headers/HeaderVue.vue";
import FooterVue from "@/widgets/footer/FooterVue.vue";
</script>

<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

