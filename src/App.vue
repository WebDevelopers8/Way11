<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  @apply leading-normal max-h-screen;
}

.logo {
  @apply block mx-auto mb-8;
}

nav {
  @apply w-full text-[12px] text-center mt-8;
}

nav a.router-link-exact-active {
  @apply text-[var(--color-text)];
}

nav a.router-link-exact-active:hover {
  @apply bg-transparent;
}

nav a {
  @apply inline-block px-4 border-l border-[var(--color-border)];
}

nav a:first-of-type {
  @apply border-0;
}

@media (min-width: 1024px) {
  header {
    @apply flex place-items-center pr-[var(--section-gap)];
  }

  .logo {
    @apply mr-8;
  }

  header .wrapper {
    @apply flex items-start flex-wrap;
  }

  nav {
    @apply text-left -ml-4 text-[1rem] py-4 mt-4;
  }
}
</style>
