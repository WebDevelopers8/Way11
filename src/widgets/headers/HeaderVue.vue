<template>
  <header class="header">
    <div class="container z-[100]">
      <div class="header__wrapper">
        <div class="header__contacts">
          <div class="header__contacts-item">
            <img src="@/shared/images/icons/phone.svg" alt="phone">
            <a :href="'tel:'+ phone">{{phone}}</a>
          </div>
          <div class="header__contacts-item">
            <img src="@/shared/images/icons/mail.svg">
            <a :href="'mailto:'+ mail">{{mail}}</a>
          </div>
        </div>
        <router-link to="/">
          <div class="header__logo">
            <img src="@/shared/images/logo-l.png" alt="logo">
          </div>
        </router-link>
        <button  class="header__burger" :class="{active:stateMenu}"
                @click="stateMenu ? stateMenu = false : stateMenu = true">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <transition name="header__sidemenu">
        <div v-if="stateMenu" class="header__sidemenu">
          <div class="header__sidemenu-nav">
            <a href="#services" >Услуги</a>
            <a href="#projects" >Проекты</a>
            <a href="#form">Оставить заявку</a>
          </div>
          <div class="header__line"></div>
        </div>
      </transition>
    </div>
    <transition name="modal">
      <HeaderModal class="lg:hidden" v-model="stateMenu" v-if="stateMenu">
        <div class="modal">
          <div class="w-[100%] flex flex-col items-center justify-center ">
            <div class="container">
              <div class="w-full flex justify-end">
                <button class="header__burger mt-[15px]" :class="{active:stateMenu}"
                        @click="stateMenu ? stateMenu = false : stateMenu = true">
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              </div>
            </div>
            <img class="mt-[36px] w-[70px] object-cover" src="@/shared/images/logo-l.png">
            <div class="flex flex-col w-[90%] mt-[40px] gap-[24px] border-b-solid border-b-[1px] border-b-[#787878] pb-[48px]">
              <a @click="() => stateMenu = false" href="#services" class="w-full text-center text-[28px] text-[#14161F] leading-[40px] tracking-[0.28px]">Услуги</a>
              <a @click="() => stateMenu = false" href="#projects" class="w-full text-center text-[28px] text-[#14161F] leading-[40px] tracking-[0.28px]">Проекты</a>
              <a @click="() => {stateMenu = false}" href="#form" class="w-full text-center text-[28px] text-[#14161F] leading-[40px] tracking-[0.28px]">Оставить заявку</a>
            </div>
            <div class="w-full flex flex-col items-center">
              <div class="flex gap-[24px] mt-[48px]">
                <a>
                  <img src="@/shared/images/icons/ball.svg">
                </a>
                <a>
                  <img src="@/shared/images/icons/vk.svg">
                </a>
                <a>
                  <img src="@/shared/images/icons/telegram.svg">
                </a>
              </div>
              <div class="flex flex-col items-center justify-center w-full mt-[24px]">
                <a href="tel:79371234333" class="text-[#14161F] text-[18px] text-center tracking-[0.18px] leading-[24px]"> +7 (937) 123-43-33</a>
                <a href="mailto:mail@studioway11.com" class="text-[#14161F] text-[18px] text-center tracking-[0.18px] leading-[24px] mt-[16px]">mail@studioway11.com</a>
              </div>
            </div>
          </div>
        </div>
      </HeaderModal>
    </transition>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue";
import HeaderModal from "@/widgets/headers/modal/HeaderModal.vue";
import {responseContact} from "@/app/http/request";

const burger = document.querySelector('.header__burger');
const stateMenu = ref(false)


let mail = ref('')
let phone = ref('')

async function getContacts()
{
  let response = await responseContact();
  mail.value = response.data.attributes.email;
  phone.value = response.data.attributes.phone;
}
getContacts()
</script>

<style lang="postcss" scoped>
.modal
{
  @appl w-full flex flex-col items-center justify-center;
  &-enter-active, &-leave-active
  {
    transition: all 0.3s ease;
  }
  &-enter-from, &-leave-to
  {
    @apply opacity-0
  }
  &-enter-to, &-leave-from
  {
    @apply opacity-100;
  }
}
.header {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @apply lg:py-[16px] py-[12px] border-b-[1px] border-b-[#787878];
  }

  &__line {
    width: 100%;
    height: 1px;
    padding-top: 1px;
    background-color: #787878;
  }

  &__sidemenu {
    pointer-events: auto;
    position: absolute;
    @apply lg:w-[100%] w-[91%] lg:block hidden;
    &-enter-active, &-leave-active {
      opacity: 1;
      pointer-events: all;
      transition: all .3s;
    }

    &-enter-from {
      @apply opacity-0
    }

    &-enter-to {
      @apply opacity-100
    }

    &-leave-to {
      @apply opacity-0
    }

    &-leave-from {
      @apply opacity-100
    }

    &-nav {
      @apply grid sm:grid-cols-3 grid-cols-[0.3fr_0.3fr_0.3fr];
      a {
        text-align: center;
        padding: 16px 0;
        @apply text-[20px]
      }
    }
  }

  &__contacts {
    @apply lg:block hidden;
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
    align-items: flex-end;
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
    @apply lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%];
    img {
      width: 64px;
      @apply lg:w-[64px] w-[40px];
    }
  }
}
</style>