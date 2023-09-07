<template>
  <div class="container">
    <div class="form__wrapper">
      <div class="form__descr">
        <div class="form__title">Предложите свой проект</div>
        <div class="form__text">
          Мы принимаем на себя обязательство о том, что коммерческая информация, полученная в рамках
          подготовки и реализации проекта, является конфиденциальной и не подлежит разглашению или
          передаче третьим лицам.
        </div>
      </div>
      <div>
        <div class="form__sm-inputs">
          <div class="form__input" ref="firstNameInput"><input v-model="firstName" type="text" placeholder="Имя*" name="name"></div>
          <div class="form__input"><input type="text" v-model="companyName" placeholder="Компания" name="company"></div>
        </div>
        <div class="form__sm-inputs">
          <div class="form__input" ref="phoneInput"><input v-model="phone" type="text" placeholder="Телефон*" name="phone"></div>
          <div class="form__input" ref="mailInput"><input v-model="mail" type="text" placeholder="E-mail*" name="email"></div>
        </div>
        <div class="form__input w100 mt-[16px]"><input type="text" v-model="budget" placeholder="Бюджет проекта" name="budget"></div>
        <div class="form__input w100"><input type="text" v-model="description" placeholder="Описание проекта" name="description">
        </div>
        <div class="form__buttons">
          <button @click="() => pushForm()">
            <div>Отправить</div>
          </button>
          <button @click="
          open({
            accept:
              '.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          })
        " class="outline">
            <div>Добавить файл</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useFileDialog} from "@vueuse/core";

// params
let firstName = ref("")
let companyName = ref("")
let phone = ref("")
let mail = ref("")
let budget = ref("")
let description = ref("")
//html companents
let firstNameInput = ref<HTMLElement | null>(null)
let phoneInput = ref<HTMLElement | null>(null)
let mailInput = ref<HTMLElement | null>(null)

const { open, onChange } = useFileDialog()

onChange(async (files: FileList | null) => {
  if(files != null) {
    console.log('loaded file')
  }
})


function validationForm() {
  let isValidated = false
  if(firstName.value.length == 0 && firstNameInput.value != null)
  {
    firstNameInput.value.classList.add("error");
  }
  if(phone.value.length == 0 && phoneInput.value != null)
  {
    phoneInput.value.classList.add("error");
  }
  if(mail.value.length == 0 && mailInput.value != null)
  {
    mailInput.value.classList.add("error");
  }


  if(isValidated)
  {
    return true
  }
  setTimeout(() => {
    if(firstNameInput.value != null && phoneInput.value != null && mailInput.value != null)
    {
      firstNameInput.value.classList.remove("error");
      phoneInput.value.classList.remove("error");
      mailInput.value.classList.remove("error");
    }
  }, 2000)
  return false
}
function pushForm()
{
  console.log(validationForm())
}
</script>

<style lang="postcss" scoped>
.form {
  @apply 2xl:mt-[800px] 2xl:pb-[100px] xl:mt-[800px] lg:mt-[750px] mt-[120px];

  &__wrapper {
    @apply lg:grid flex flex-col gap-[32px] lg:grid-cols-2;
  }

  &__title {
    @apply lg:leading-[56px] leading-[40px] lg:text-[56px] text-[30px];
  }

  &__text {
    margin-top: 24px;
    color: #898A8F;
    line-height: 24px;
    @apply lg:text-[18px] text-[16px] lg:pr-[150px];
  }

  &__sm-inputs {
    @apply flex lg:flex-row flex-col lg:justify-between lg:items-start items-center mt-[24px] gap-[16px]
  }

  &__input {
    position: relative;
    height: 58px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-18deg);
    border: 1px solid #438CB4;
    transition: all 0.2s ease;
    @apply lg:w-[calc(50%-10px)] sm:w-full w-[100%];

    &.w100 {
      margin-bottom: 24px;
      @apply sm:w-full w-[100%];
    }


    &:hover {
      border: 1px solid #5BB6F1;
    }

    &.error
    {
      transition: all 0.6s ease !important;
      @apply border-[#EE5050];
    }

    input {
      border: none;
      background: transparent;
      width: calc(100% - 16px);
      @apply lg:text-[20px] text-[18px];

      &:focus-visible {
        outline: none;
      }

      &::placeholder {
        color: #B9B9BC;
      }

      padding: 8px;
      color: #14161F;
      transform: skew(18deg);
    }
  }

  &__buttons {

    @apply flex justify-between lg:flex-row flex-col lg:items-start items-center gap-[20px] lg:mt-[0] mt-[50px];

    button {
      position: relative;
      height: 58px;
      background-color: #5BB6F1;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: skew(-18deg);
      border: 1px solid #438CB4;
      border-right: 5px solid #438CB4;
      border-bottom: 5px solid #438CB4;
      transition: all .2s ease;
      @apply lg:w-[calc(50%-10px)] w-[80%];

      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }

      &.outline {
        background-color: #fff;
        @apply lg:order-[0] order-[-1];

        div {
          color: #438CB4;
          @apply 2xl:left-[14px] 2xl:top-[12px] xl:left-[15px] xl:top-[10px] lg:left-[10px] lg:top-[10px] sm:left-[35%];
        }
      }

      div {
        color: #fff;
        transform: skew(18deg);
        position: absolute;
        font-weight: 400;

        @apply leading-[32px] lg:text-[22px] text-[18px] lg:top-[10px] lg:w-[90%] sm:w-[33%];
      }
    }
  }
}
</style>