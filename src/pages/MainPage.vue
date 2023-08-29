<template>
  <section class="promo">
    <img id="bg1" src="@/shared/images/bg-1.png" alt="background">
    <img src="@/shared/images/man.png" class="promo__pic" alt="promo pic">
    <div class="container">
      <div class="promo__title">
        <span>Путь в тысячу миль<br> начинается</span> с одного шага
      </div>
      <div class="promo__text">
        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса.<span class="lg:block hidden">
        В основе наших проектов лежат идеи,
        основанные на аналитике, креативе и технологиях.
      </span>
      </div>
      <div class="flex justify-center items-center">
        <button class="promo__btn">
          <div>Оставить заявку</div>
        </button>
      </div>
      <div class="promo__adv">
        <div class="promo__line"></div>
        <div class="promo__adv-content">
          <p>Разработали 8 стартапов для наших заказчиков с нуля.</p>
          <p>Создаем IT не только для рынка России и СНГ, но и для Европейских / западных стран.</p>
          <p>#2 в рейтинге тендерной площадки Ad&#8209;Unions за 2022 год.</p>
        </div>
        <div class="promo__line"></div>
      </div>
    </div>
  </section>

  <section class="adv" id="services">
    <div class="container">
      <div class="adv__title">
        В чем мы сильны...
      </div>
      <div class="adv__text">
        Мы объединили все необходимые направления для создания успешных проектов.
      </div>
      <div class="adv__content">
        <div class="adv__content-item">
          <img src="@/shared/images/pic1.png" alt="pic">
          <span>Аналитика</span>
          <p>Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая
            основные запросы клиента.</p>
        </div>
        <div class="adv__content-item">
          <img src="@/shared/images/pic2.png" alt="pic">
          <span>Веб-разработка</span>
          <p>Создаем цифровые продукты: корпоративные и промо-сайты, платформы и высоко нагруженные системы.
          </p>
        </div>
        <div class="adv__content-item">
          <img src="@/shared/images/pic3.png" alt="pic">
          <span>Мобильная разработка</span>
          <p>Разрабатываем приложения для IOS и Android, учитывая архитектуру мобильного приложения и
            особенностей дизайна.</p>
        </div>
        <div class="adv__content-item">
          <img src="@/shared/images/pic4.png" alt="pic">
          <span>IT-безопасность</span>
          <p>Придерживаемся всех стандартов регулятора в сфере обеспечения защиты информации. Проводим аудиты
            безопасности информационных систем.</p>
        </div>
        <div class="adv__content-item">
          <img src="@/shared/images/pic5.png" alt="pic">
          <span>UI/UX дизайн</span>
          <p>Детально прорабатываем макеты, дизайн-систему и UI-kit. Для проверки дизайн-гипотиз отдельно
            создаем User Flow и интеррактивный прототип.</p>
        </div>
        <div class="adv__content-item">
          <img src="@/shared/images/pic6.png" alt="pic">
          <span>Поддержка проектов</span>
          <p>Поддерживаем стабильную работу всех проектов и помогаем совершенствовать их, основываясь на
            последних тенденциях в IT-сфере.</p>
        </div>
      </div>
    </div>
  </section>

  <div ref="projectsSection" class="projects" id="projects">
    <img src="@/shared/images/bg-2.png" id="bg2" alt="background">
    <div class="container">
      <div class="projects__title">Проекты</div>
<!--      <MotoComponent />-->
      <div class="projects__road">
        <img src="@/shared/images/road.png" class="projects__road-img">
        <span ref="bike" class="projects__road-bike tr0">
                    <img src="@/shared/images/bike.png">
                    <img src="@/shared/images/wheel-1.png" class="projects__road-wheel1">
                    <img src="@/shared/images/wheel-2.png" class="projects__road-wheel2">
                    <div class="projects__road-line"></div>
                    <div ref="projectsText0" class="projects__road-text active" id="tr0">
                        <span>Lancelot</span>
                        <p>5 июня 2019 г.</p>
                    </div>
                    <div ref="projectsText1" class="projects__road-text" id="tr1">
                        <span>Lancelot 2</span>
                        <p>23 мая 2020 г.</p>
                    </div>
                    <div ref="projectsText2" class="projects__road-text" id="tr2">
                        <span>Lancelot 3</span>
                        <p>6 октября 2021 г.</p>
                    </div>
                </span>
        <router-link to="/projects" class="projects__road-btn">Все проекты</router-link>
      </div>
      <div ref="projectsWrap" class="projects__test">
        <div ref="projectsWrapper1" class="projects__wrapper active">
          <div class="projects__descr">
            <div class="projects__name">Lancelot</div>
            <div class="projects__name-descr">Вебинарная платформа</div>
            <div class="projects__text">
              На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку
              для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей
              пройдет рассылка с напоминанием.
            </div>
            <div class="projects__tags">
              <span>AWS Chalice</span>
              <span>Lambda</span>
              <span>Aurora Serverless Postgres</span>
              <span>API Gateway</span>
              <span>DynamoDB</span>
              <span>WebSockets</span>
              <span>Python</span>
              <span>Git</span>
              <span>React</span>
            </div>
            <div class="projects__buttons">
              <button type="submit">
                <div>Подробнее</div>
              </button>
              <button class="outline">
                <div>Предложить проект</div>
              </button>
            </div>
          </div>
            <SliderVue />
        </div>
        <div ref="projectsWrapper2" class="projects__wrapper ">
          <div class="projects__descr">
            <div class="projects__name">Lancelot 2</div>
            <div class="projects__name-descr">Вебинарная платформа</div>
            <div class="projects__text">
              Таким образом, начало повседневной работы по формированию позиции играет определяющее
              значение для своевременного выполнения сверхзадачи. Как уже неоднократно упомянуто,
              диаграммы связей освещают чрезвычайно интересные особенности картины в целом, однако
              конкретные выводы, разумеется, преданы социально-демократической анафеме.
            </div>
            <div class="projects__tags">
              <span>AWS Chalice</span>
              <span>Lambda</span>
              <span>Python</span>
              <span>Git</span>
              <span>React</span>
            </div>
            <div class="projects__buttons">
              <button type="submit">
                <div>Подробнее</div>
              </button>
              <button class="outline">
                <div>Предложить проект</div>
              </button>
            </div>
          </div>
          <SliderVue />
        </div>
        <div ref="projectsWrapper3" class="projects__wrapper ">
          <div class="projects__descr">
            <div class="projects__name">Lancelot 3</div>
            <div class="projects__name-descr">Вебинарная платформа</div>
            <div class="projects__text">
              На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку
              для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей
              пройдет рассылка с напоминанием.
            </div>
            <div class="projects__tags">
              <span>AWS Chalice</span>
              <span>Lambda</span>
              <span>Python</span>
              <span>Git</span>
              <span>React</span>
            </div>
            <div class="projects__buttons">
              <button type="submit">
                <div>Подробнее</div>
              </button>
              <button class="outline">
                <div>Предложить проект</div>
              </button>
            </div>
          </div>
          <SliderVue />
        </div>
      </div>
    </div>
  </div>

  <section class="form" id="form">
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
        <form>
          <div class="form__sm-inputs">
            <div class="form__input"><input type="text" placeholder="Имя*" name="name"></div>
            <div class="form__input"><input type="text" placeholder="Компания" name="company"></div>
          </div>
          <div class="form__sm-inputs">
            <div class="form__input"><input type="text" placeholder="Телефон*" name="phone"></div>
            <div class="form__input"><input type="text" placeholder="E-mail*" name="email"></div>
          </div>
          <div class="form__input w100"><input type="text" placeholder="Бюджет проекта" name="budget"></div>
          <div class="form__input w100"><input type="text" placeholder="Описание проекта" name="description">
          </div>
          <div class="form__buttons">
            <button type="submit">
              <div>Отправить</div>
            </button>
            <button class="outline">
              <div>Добавить файл</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <FooterVue />
</template>

<script setup lang="ts">
import FooterVue from "@/widgets/footer/FooterVue.vue";
import MotoComponent from "@/widgets/motorcyclist/MotoComponent.vue";
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {onMounted, ref} from "vue";

const projectsSection = ref<HTMLElement | null>(null);
const projectsWrap = ref<HTMLElement | null>(null);
const projectsWrapper1 = ref<HTMLElement | null>(null);
const projectsWrapper2 = ref<HTMLElement | null>(null);
const projectsWrapper3 = ref<HTMLElement | null>(null);
const bike = ref<HTMLElement | null>(null);
const projectsText0 = ref<HTMLElement | null>(null);
const projectsText1 = ref<HTMLElement | null>(null);
const projectsText2 = ref<HTMLElement | null>(null);
onProjectsSectionHeadler(getProjectSwitcher());


function onProjectsSectionHeadler(onSwitchProjectCallback) {
  const topSectionPositionOfset = 0;
  const pause = 300;

  const minProjectNumber = 1;
  const maxProjectNumber = 3;
  let projectNumber = minProjectNumber - 1;
  let delayStart = Date.now() - pause;

  addEventListener("scroll", (e) => {
    if(projectsSection.value != null)
    {
      const distanceFromTop = projectsSection.value.getBoundingClientRect().top;

      if (
          (scrollToDownOfSection(distanceFromTop) &&
              !isFinishState()) ||
          (scrollToTopOfSection(distanceFromTop) &&
              !isStartState()) ||
          (scrollOnSection(distanceFromTop) && !isStartState() && !isFinishState())
      ) {
        scrollToStartOfSection();
      }
    }
  });

  onHeadlerForScroll((e) => {
    let scrollIsActive = true;
    const deltaScroll = e.deltaY || e.detail || e.wheelDelta;
    const distanceFromTop = projectsSection.value == null ? 0 : projectsSection.value.getBoundingClientRect().top;
    if (
        (scrollToDownOfSection(distanceFromTop - deltaScroll) &&
            !isFinishState()) ||
        (scrollToTopOfSection(distanceFromTop - deltaScroll) &&
            !isStartState()) ||
        (scrollOnSection(distanceFromTop) && !isStartState() && !isFinishState())
    ) {
      scrollIsActive = false;
    }

    if (pauseIsEnded()) {
      startPause();
      if (!scrollIsActive) {
        if (deltaScroll < 0) {
          toPrevProject();
        } else {
          toNextProject();
        }
      }
    }

    if (!scrollIsActive) {
      return false;
    }

    return true;
  });

  function scrollToDownOfSection(distanceFromTop) {
    if (distanceFromTop < topSectionPositionOfset) {
      return true;
    } else return false;
  }

  function scrollToTopOfSection(distanceFromTop) {
    if (distanceFromTop > topSectionPositionOfset) {
      return true;
    } else return false;
  }

  function scrollOnSection(distanceFromTop) {
    if (distanceFromTop == topSectionPositionOfset) {
      return true;
    } else return false;
  }

  function isStartState() {
    if (projectNumber == minProjectNumber - 1) {
      return true;
    } else return false;
  }

  function isFinishState() {
    if (projectNumber == maxProjectNumber + 1) {
      return true;
    } else return false;
  }

  function pauseIsEnded() {
    return Date.now() - delayStart > pause;
  }

  function startPause() {
    delayStart = Date.now();
  }

  function toNextProject() {
    if (projectNumber <= maxProjectNumber) {
      projectNumber++;
      onSwitchProjectCallback(projectNumber);
    }
  }

  function toPrevProject() {
    if (projectNumber >= minProjectNumber) {
      projectNumber--;
      onSwitchProjectCallback(projectNumber);
    }
  }

  function scrollToStartOfSection() {
    if(projectsSection.value != null)
    {
      window.scrollTo(0, projectsSection.value.offsetTop);
    }
  }
}

function getProjectSwitcher() {
  const projectsOffset = 1380;

  let bikePosition = 0;

  function setActiveProject(number) {
    console.log("Switch!");

    bike.value.classList.add("tr");
    setTimeout(() => bike.value.classList.remove("tr"), 600);

    if (number == 1 && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {
      projectsWrap.value.style.transform = "translateX(" + 0 + "px)";
      projectsWrapper1.value.classList.remove("active");
      projectsWrapper2.value.classList.remove("active");
      projectsWrapper3.value.classList.remove("active");
      projectsWrapper1.value.classList.add("active");
      projectsText1.value.classList.remove("active");
      projectsText2.value.classList.remove("active");
      projectsText0.value.classList.add("active");
      bikePosition = 0;
    }
    if (number == 2 && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {
      projectsWrap.value.style.transform = "translateX(" + -projectsOffset + "px)";
      projectsWrapper1.value.classList.remove("active");
      projectsWrapper2.value.classList.remove("active");
      projectsWrapper3.value.classList.remove("active");
      projectsWrapper2.value.classList.add("active");
      projectsText0.value.classList.remove("active");
      projectsText2.value.classList.remove("active");
      projectsText1.value.classList.add("active");
      bikePosition = 420;
    }
    if (number == 3) {
      projectsWrap.value.style.transform =
          "translateX(" + -projectsOffset * 2 + "px)";
      projectsWrapper1.value.classList.remove("active");
      projectsWrapper2.value.classList.remove("active");
      projectsWrapper3.value.classList.remove("active");
      projectsWrapper3.value.classList.add("active");
      projectsText0.value.classList.remove("active");
      projectsText1.value.classList.remove("active");
      projectsText2.value.classList.add("active");
      bikePosition = 840;
    }

    bike.value.style.transform = "translateX(" + bikePosition + "px)";
    bike.value.style.transition = "all 1s ease-in";
  }

  return setActiveProject;
}

function onHeadlerForScroll(callback) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    if (!callback(e)) {
      e.preventDefault();
    }
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      if (!callback(e)) {
        e.preventDefault();
        return false;
      }
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

</script>

<style lang="postcss" scoped>
.promo {
  @apply xl:pt-[180px] pt-[100px] relative;
  &__title {
    font-size: 60px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 64px;
    @apply md:text-start text-center lg:text-[60px] text-[44px] relative;
    span {
      -webkit-text-stroke: 2px #000000;
      color: transparent;
    }
  }
  &__text {
    font-size: 20px;
    line-height: 32px;
    @apply lg:mt-[40px] w-full mt-[350px];
  }
  &__btn {
    position: relative;
    width: 300px;
    height: 58px;
    background-color: #5BB6F1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    transform: skew(-18deg);
    border: 1px solid #438CB4;
    border-right: 5px solid #438CB4;
    border-bottom: 5px solid #438CB4;
    transition: all .2s ease;
    &:hover {
      transform: skew(-18deg) translateY(2px);
      border-right: 1px solid #438CB4;
      border-bottom: 1px solid #438CB4;
    }
    div {
      position: absolute;
      top: 14px;
      left: 58px;
      font-weight: 300;
      font-size: 22px;
      color:#fff;
      transform: skew(18deg);
    }
  }
  &__pic {
    position: absolute;
    z-index: -1;
    pointer-events: none;
    @apply z-[-1] lg:bottom-[-115px] lg:right-[-225px] sm:bottom-[60px] sm:right-[-135px] sm:h-[70%] bottom-[142px] right-[-29px] object-cover h-[47%] ;
  }
  &__adv {
    @apply lg:mt-[160px] lg:block hidden relative;
    &-content {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      p {
        padding: 48px 24px;
        text-align: center;
        font-size: 18px;
        line-height: 24px;
        color: #898A8F;
      }
    }
  }
  &__line {
    background-color: #898A8F;
    width: 100%;
    height: 1px;
  }
}

.adv {
  padding-top: 260px;
  &__title {
    @apply sm:text-[56px] text-[40px] lg:text-start text-center;
  }
  &__text {
    margin-top: 8px;
    font-size: 20px;
    @apply lg:text-start text-center
  }
  &__content {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 40px 25px;
    @apply lg:grid block;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 36px;
        margin-top: 32px;
      }
      p {
        font-size: 20px;
        margin-top: 24px;
        line-height: 32px;
      }
    }
  }
}

.form {
  padding-top: 150px;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &__title {
    font-size: 56px;
    line-height: 56px;
  }
  &__text {
    margin-top: 24px;
    font-size: 18px;
    color:#898A8F;
    padding-right: 150px;
    line-height: 24px;
  }
  &__sm-inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  &__input {
    position: relative;
    width: calc(50% - 10px);
    height: 58px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-18deg);
    border: 1px solid #438CB4;
    transition: all 0.2s ease;
    &.w100 {
      width: 100%;
      margin-bottom: 24px;
    }
    &:hover {
      border: 1px solid #5BB6F1;
    }
    input {
      border: none;
      background: transparent;
      width: calc(100% - 16px);
      font-size: 20px;
      &:focus-visible {
        outline: none;
      }
      &::placeholder {
        color: #B9B9BC;
      }
      font-size: 22px;
      padding: 8px;
      color: #B9B9BC;
      transform: skew(18deg);
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    button {
      position: relative;
      width: calc(50% - 10px);
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
      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }
      &.outline {
        background-color: #fff;
        div {
          color: #438CB4;
          left: 74px;
        }
      }
      div {
        font-size: 22px;
        color:#fff;
        transform: skew(18deg);
        position: absolute;
        font-weight: 300;
        top: 12px;
        left: 90px;
      }
    }
  }
}
.projects {
  position: relative;
  margin-top: 250px;
  padding-bottom: 680px;
  min-height: 800px;
  height: 100vh;
  &__test {
    position: absolute;
    display: flex;
    &.tr0 {
      transform: translateX(0px);
    }
    &.tr1 {
      transform: translateX(-1380px);
    }
    &.tr2 {
      transform: translateX(-2760px);
    }
  }
  &__wrapper {
    width: 1280px;
    margin-right: 100px;
    margin-top: 120px;
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    opacity: 0;
    pointer-events: none;
    &.active{
      opacity: 1;
      pointer-events: all;
    }
  }
  &__road {
    @apply py-[120px] px-[0] xl:block hidden relative;
    &-img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
    }
    &-bike {
      position: absolute;
      left: 0px;
      bottom: 45px;
      transition: all 0.6s ease;
      &.tr {
        .projects__road-wheel1, .projects__road-wheel2 {
          animation: wheel .6s linear;
        }
      }
    }
    &-wheel1 {
      position: absolute;
      bottom: -11px;
      left: -12px;
      z-index: 2;
    }
    &-wheel2 {
      position: absolute;
      bottom: -11px;
      right: -12px;
      z-index: 2;
    }
    &-line {
      position: absolute;
      right: -12px;
      bottom: 0px;
      width: 1px;
      height: 160px;
      background-color: #787878;
    }
    &-text {
      position: absolute;
      left: calc(100% + 20px);
      bottom: 120px;
      opacity: 0;
      pointer-events: none;
      &.active {
        opacity: 1;
        pointer-events: all;
      }
      span {
        font-size: 18px;
      }
      p {
        font-size: 18px;
        color: #898A8F;
        width: max-content;
      }
    }
    &-btn {
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      color: #FFF;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 50px;
      font-weight: 300;
      background-image: url("@/shared/images/button-bg2.png");
      background-repeat: no-repeat;
      padding-right: 12px;
      object-fit: contain;
      transition: all 0.2s ease;
      &:hover {
        cursor: pointer;
        background-image: url("@/shared/images/button-bg.png");
        transform: translateY(calc(-50% + 2px));
      }
    }
  }
  &__title {
    font-size: 56px;
  }
  &__name {
    font-size: 36px;
  }
  &__name-descr {
    font-size: 18px;
    color: #898A8F;
  }
  &__text {
    font-size: 20px;
    line-height: 32px;
    margin-top: 24px;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    span {
      padding: 8px 20px;
      font-size: 18px;
      border: 1px solid #787878;
      border-radius: 5px;
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }
  &__slider {
    background-color:#B9B9BC;
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    button {
      position: relative;
      width: calc(50% - 10px);
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
      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }
      &.outline {
        background-color: #fff;
        div {
          color: #438CB4;
          left: 46px;
        }
      }
      div {
        position: absolute;
        top: 14px;
        left: 84px;
        font-size: 22px;
        font-weight: 300;
        color:#fff;
        transform: skew(18deg);
      }
    }
  }
}

@media (max-height: 1000px) {
  .projects {
    padding-bottom: 580px;
  }
  .projects__tags {
    display: none;
  }
  .slider__wrapper {
    max-width: 342px;
  }
  #bg2 {
    height: 1800px;
  }
}

@media (max-height: 900px) {
  .projects__wrapper {
    margin-top: 70px;
  }
  .projects {
    padding-bottom: 480px;
  }
  #bg2 {
    height: 1700px;
  }
}
</style>
