<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__contacts">
          <div class="header__contacts-item">
            <img src="@/shared/images/phone.svg" alt="phone">
            <a href="tel:+79371234333">+7 (937) 123-43-33</a>
          </div>
          <div class="header__contacts-item">
            <img src="@/shared/images/mail.svg">
            <a href="mailto:mail@studioway11.com">mail@studioway11.com</a>
          </div>
        </div>
        <router-link to="/">
          <div class="header__logo">
            <img src="@/shared/images/logo-l.png" alt="logo">
          </div>
        </router-link>
        <transition name="header__burger">
          <button class="header__burger" @click="() => {
            stateMenu ? stateMenu = false : stateMenu = true;

          }">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </transition>
      </div>
      <transition name="header__sidemenu">
        <div v-if="stateMenu" class="header__sidemenu">
          <div class="header__line"></div>
          <div class="header__sidemenu-nav">
            <a href="#services" id="services__link">Услуги</a>
            <a href="#projects" id="projects__link">Проекты</a>
            <a href="#form" id="form__link">Оставить заявку</a>
          </div>
          <div class="header__line"></div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">


import {ref} from "vue";

const stateMenu = ref(false)
</script>

<style lang="postcss" scoped>
.header {
  &__wrapper {
    position: relative;
    display: flex;
    padding: 16px 0;
    align-items: center;
    justify-content: space-between;
  }
  &__line {
    width: 100%;
    height: 1px;
    padding-top: 1px;
    background-color: #787878;
  }
  &__sidemenu {
    pointer-events: none;
    position: absolute;
    width: 100%;
    &-enter-active, &-leave-active{
      opacity: 1;
      pointer-events: all;
      transition: all .3s;
    }
    &-enter-from{
      @apply opacity-0
    }
    &-enter-to{
      @apply opacity-100
    }
    &-leave-to{
      @apply opacity-0
    }
    &-leave-from
    {
      @apply opacity-100
    }
    &-nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      a {
        text-align: center;
        padding: 16px 0;
        font-size: 20px;
      }
    }
  }
  &__contacts {
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        margin-right: 12px;
      }
      a {
        font-size: 18px;
      }
    }
  }
  &__burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    width: 32px;
    height: 28px;
    &:hover {
      cursor: pointer;
    }
    div {
      width: 100%;
      height: 2px;
      background-color: #14161F;
      border-radius: 4px;
      transition: all 0.3s ease;
      &:last-child {
        width: 14px;
      }
    }
    &.active {
      div {
        opacity: 0;
      }
      div:first-child {
        opacity: 1;
        transform: rotate(45deg) translate(8px, 8px);
      }
      div:last-child {
        opacity: 1;
        width: 100%;
        transform: rotate(-45deg) translate(10px, -10px);
      }
    }
  }
  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    img {
      width: 64px;
    }
  }
}
</style>