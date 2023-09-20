<template>
  <div class="container">
    <div class="form__wrapper" v-if="!isPushed">
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
          <div class="form__input" ref="firstNameInput"><input v-model="firstName" type="text" placeholder="Имя*"
                                                               name="name"></div>
          <div class="form__input"><input type="text" v-model="companyName" placeholder="Компания" name="company"></div>
        </div>
        <div class="form__sm-inputs">
          <div class="form__input" ref="phoneInput"><input v-model="phone" type="text" placeholder="Телефон*"
                                                           name="phone"></div>
          <div class="form__input" ref="mailInput"><input v-model="mail" type="text" placeholder="E-mail*" name="email">
          </div>
        </div>
        <div class="form__input w100 mt-[16px]"><input type="text" v-model="budget" placeholder="Бюджет проекта"
                                                       name="budget"></div>
        <div class="form__input w100"><input type="text" v-model="description" placeholder="Описание проекта"
                                             name="description">
        </div>
        <div class="form__buttons">
          <button @click="() => pushForm()">
            <div>Отправить</div>
          </button>
          <button ref="addFileButton" :disabled="fileIsLoaded" @click="
          open({
            accept:
              '.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          })
        " class="outline">
            <div v-if="!fileIsLoaded">Добавить файл</div>
            <div v-if="fileIsLoaded" :class="{ buttonfile: fileIsLoaded }">
              <div class="buttonfile__icon">
                <img src="@/shared/images/form/fileIcon.svg">
              </div>
              <div class="buttonfile__text">
                <span class="buttonfile-name">{{ nameFile }}</span>
                <span class="buttonfile-size">{{ sizeFile }}</span>
              </div>
              <div class="buttonfile__button-close">
                <button @click="() => {reset(); deleteFile()}" class="buttonfile__button-close">
                  <img src="@/shared/images/form/closeIcon.svg">
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div v-if="isPushed" class="flex flex-col items-center">
      <p class="text-[#14161F] text-[56px] sm:text-start text-center font-normal leading-[56px]">Спасибо за
        обращение!</p>
      <span
          class="text-[#898A8F] text-[18px] sm:text-start text-center font-normal leading-[24px] md:w-[620px] mt-[24px]">Мы получили вашу заявку. В ближайшее время наш специалист свяжется с вами для обсуждения вашего проекта.<br> Хорошего дня!</span>
      <div class="mt-[48px]">
        <div class="form__buttons-accept">
          <button class="w-[300px]" @click="() => isPushed = false">
            <div>Отправить повторно</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useFileDialog} from "@vueuse/core";
import {sendFile, sendForm} from "@/app/http/request";
import type {dataType} from "@/entities/types/dataForm/dataType";

let isPushed = ref(false)
// params
let firstName = ref("")
let companyName = ref("")
let phone = ref("")
let mail = ref("")
let budget = ref("")
let description = ref("")
let fileList = ref<FileList | null>(null)
//html companents
let firstNameInput = ref<HTMLElement | null>(null)
let phoneInput = ref<HTMLElement | null>(null)
let mailInput = ref<HTMLElement | null>(null)
let addFileButton = ref<HTMLElement | null>(null)
let fileIsLoaded = ref(false)
let nameFile = ref('')
let sizeFile = ref('')

const {open, onChange, reset} = useFileDialog()

onChange(async (files: FileList | null) => {
  if (files != null && addFileButton.value != null) {
    fileList.value = files
    addFileButton.value.classList.add("active")
    fileIsLoaded.value = true
    nameFile.value = files[0].name
    sizeFile.value = (files[0].size / (1024 * 1024)).toFixed(2) + " Mb"
  }
})

function deleteFile() {
  if (addFileButton.value != null) {
    addFileButton.value.classList.remove("active")
    setTimeout(() => {
      fileIsLoaded.value = false
    }, 100)
  }
}

function validationForm() {
  let isValidated = true
  let regMail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  if (firstName.value.length == 0 && firstNameInput.value != null) {
    firstNameInput.value.classList.add("error");
    isValidated = false
  }
  if (phone.value.length == 0 && phoneInput.value != null) {
    phoneInput.value.classList.add("error");
    isValidated = false
  }
  if (mailInput.value != null && !regMail.test(mail.value)) {
    mailInput.value.classList.add("error");
    isValidated = false
  }


  if (isValidated) {
    return true
  }
  setTimeout(() => {
    if (firstNameInput.value != null && phoneInput.value != null && mailInput.value != null) {
      firstNameInput.value.classList.remove("error");
      phoneInput.value.classList.remove("error");
      mailInput.value.classList.remove("error");
    }
  }, 2000)
  return false
}

async function pushForm() {
  if (validationForm()) {
    let data: dataType = {
      data: {
        firstName: firstName.value,
        companyName: companyName.value,
        phone: phone.value,
        mail: mail.value,
        projectBugdet: budget.value,
        description: description.value,
      }
    }
    if (fileList.value != null) {
      let idFile = await sendFile(fileList.value[0])
      data.data.attachment = idFile
    }

    let res = await sendForm(data);
    if (typeof res != 'number') {
      firstName.value = ''
      companyName.value = ''
      phone.value = ''
      mail.value = ''
      budget.value = ''
      description.value = ''
      fileList.value = null
      fileIsLoaded.value = false

      isPushed.value = true
    } else {
      emit("update:errorCode", res)
    }
  }
}

const emit = defineEmits(['update:errorCode'])
</script>

<style lang="postcss" scoped>

.buttonfile {
  top: 0 !important;
  left: 0 !important;
  transform: skew(180deg) !important;
  width: 100% !important;
  height: 100%;
  position: relative !important;
  @apply flex justify-between;

  &-name {
    line-height: 24px;
    letter-spacing: 0.18px;
    @apply text-[#14161F] text-[18px] lg:text-start text-center;
  }

  &-size {
    line-height: 24px;
    letter-spacing: 0.18px;
    @apply text-[#B9B9BC] text-[18px] lg:text-start text-center;
  }

  &__button-close {
    top: 0 !important;
    left: 0 !important;
    background-color: transparent !important;
    border: none !important;
    width: 30% !important;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative !important;
    @apply lg:justify-center justify-end sm:mr-0 mr-[5px];

    & button {
      transform: skew(0) !important;
    }

    & img {
      width: 17px !important;
      height: 17px !important;
    }
  }

  &__icon {
    top: 0 !important;
    left: 0 !important;
    position: relative !important;
    display: flex;
    align-items: center;
    width: 27% !important;
    @apply sm:ml-[20px] ml-[10px]
  }

  &__text {
    top: 0 !important;
    left: 0 !important;
    position: relative !important;
    justify-content: center;
    gap: 0px;
    @apply flex flex-col;
  }

}

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

    &.error {
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


      @media (pointer: fine) {
        &:hover {
          transform: skew(-18deg) translateY(2px);
          border-right: 1px solid #438CB4;
          border-bottom: 1px solid #438CB4;
        }
      }

      &.active {
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

  &__buttons-accept {

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
      @apply w-[300px];

      @media (pointer: fine) {
        &:hover {
          transform: skew(-18deg) translateY(2px);
          border-right: 1px solid #438CB4;
          border-bottom: 1px solid #438CB4;
        }
      }

      &.active {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }

      div {
        color: #fff;
        transform: skew(18deg);
        position: absolute;
        font-weight: 400;

        @apply leading-[32px] lg:text-[22px] text-[18px] lg:top-[10px] w-[300px];
      }
    }
  }
}
</style>