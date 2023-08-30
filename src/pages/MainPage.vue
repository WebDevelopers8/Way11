<template>
  <section class="promo">
    <img id="bg1" src="@/shared/images/bg-1.png" alt="background">
    <img src="@/shared/images/promo-pic.png" class="promo__pic" alt="promo pic">
    <div class="container">
      <div class="promo__title-comp">
        <span>Путь в тысячу миль начинается</span> с одного шага
      </div>
      <div class="promo__title-mob">
        <span>Путь в тысячу миль начинается</span><br> с одного<br> шага
      </div>
      <div class="promo__text">
        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса.<span class="lg:block hidden">
        В основе наших проектов лежат идеи,
        основанные на аналитике, креативе и технологиях.
      </span>
      </div>
      <div class="flex lg:justify-start justify-center items-center">
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

  <img src="@/shared/images/bg-1.png" id="bg2" alt="background">
  <div class="mt-[200px] lg:hidden block">
    <div class="container">
      <p class="text-[#14161F] text-[40px] leading-[40px]">Проекты</p>
      <div class="flex w-full items-center gap-[15px] justify-center mt-[32px]">
        <button @click="projectCount == 1 ? projectCount = maxCountProject : projectCount--" class="btn-prev">
          <img src="@/shared/images/arrow-prev.png">
        </button>
        <div class="flex flex-col items-center justify-center px-[20px]">
          <span class="text-[#14161F] text-[28px] leading-[40px]">{{title[projectCount - 1]}}</span>
          <div class="text-[#898A8F] text-[16px] leading-[24px]">{{type[projectCount - 1]}}</div>
        </div>
        <button @click="projectCount == maxCountProject ? projectCount = 1 : projectCount++" class="btn-next">
          <img src="@/shared/images/arrow-next.png">
        </button>
      </div>
      <div  v-if="projectCount == 1">
        <div class="my-[24px] sm:h-[450px] h-[300px]">
          <SliderVue />
        </div>
        <span>На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.</span>
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
          <router-link to='/project/0'>
            <div>Подробнее</div>
          </router-link>
          <button class="outline">
            <div>Предложить проект</div>
          </button>
        </div>
      </div>
      <div  v-if="projectCount == 2">
        <div class="my-[24px] sm:h-[450px] h-[300px]">
          <SliderVue />
        </div>
        <span>На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.</span>
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
          <router-link to='/project/0'>
            <div>Подробнее</div>
          </router-link>
          <button class="outline">
            <div>Предложить проект</div>
          </button>
        </div>
      </div>
      <div  v-if="projectCount == 3">
        <div class="my-[24px] sm:h-[450px] h-[300px]">
          <SliderVue />
        </div>
        <span>На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.</span>
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
          <router-link to='/project/0'>
            <div>Подробнее</div>
          </router-link>
          <button class="outline">
            <div>Предложить проект</div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div ref="projectsSection" class="projects" id="projects">
    <div class="container">
      <div class="projects__title">Проекты</div>
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
              <router-link to='/project/0'>
                <div>Подробнее</div>
              </router-link>
              <button class="outline">
                <div>Предложить проект</div>
              </button>
            </div>
          </div>
          <div class="h-[90%]">
            <SliderVue />
          </div>

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
              <router-link to="/project/1">
                <div>Подробнее</div>
              </router-link>
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
              <router-link to="/project/3">
                <div>Подробнее</div>
              </router-link>
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
          <div class="form__input w100 mt-[16px]"><input type="text" placeholder="Бюджет проекта" name="budget"></div>
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
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {ref} from "vue";

let projectCount = ref(1)
let maxCountProject = ref(3)
let title = ['Lancelot', 'Lancelot2', 'Lancelot3']
let type = ['Вебинарная платформа', 'Вебинарная платформа', 'Вебинарная платформа']


//main script
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

//@ts-ignore
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
//@ts-ignore
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
//@ts-ignore
  function scrollToDownOfSection(distanceFromTop) {
    if (distanceFromTop < topSectionPositionOfset) {
      return true;
    } else return false;
  }
//@ts-ignore
  function scrollToTopOfSection(distanceFromTop) {
    if (distanceFromTop > topSectionPositionOfset) {
      return true;
    } else return false;
  }
//@ts-ignore
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
//@ts-ignore
  function setActiveProject(number) {
//@ts-ignore
    bike.value.classList.add("tr");
    //@ts-ignore
    setTimeout(() => bike.value.classList.remove("tr"), 600);

    if (number == 1 && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {
      //@ts-ignore
      projectsWrap.value.style.transform = "translateX(" + 0 + "px)";
      //@ts-ignore
      projectsWrapper1.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper2.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper3.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper1.value.classList.add("active");
      projectsText1.value.classList.remove("active");
      projectsText2.value.classList.remove("active");
      projectsText0.value.classList.add("active");
      bikePosition = 0;
    }
    if (number == 2 && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {
      //@ts-ignore
      projectsWrap.value.style.transform = "translateX(" + -projectsOffset + "px)";
      //@ts-ignore
      projectsWrapper1.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper2.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper3.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper2.value.classList.add("active");
      projectsText0.value.classList.remove("active");
      projectsText2.value.classList.remove("active");
      projectsText1.value.classList.add("active");
      bikePosition = 420;
    }
    if (number == 3) {
      //@ts-ignore
      projectsWrap.value.style.transform =
          "translateX(" + -projectsOffset * 2 + "px)";
      //@ts-ignore
      projectsWrapper1.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper2.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper3.value.classList.remove("active");
      //@ts-ignore
      projectsWrapper3.value.classList.add("active");
      //@ts-ignore
      projectsText0.value.classList.remove("active");
      //@ts-ignore
      projectsText1.value.classList.remove("active");
      //@ts-ignore
      projectsText2.value.classList.add("active");
      bikePosition = 840;
    }
    //@ts-ignore
    bike.value.style.transform = "translateX(" + bikePosition + "px)";
    //@ts-ignore
    bike.value.style.transition = "all 1s ease-in";
  }

  return setActiveProject;
}
//@ts-ignore
function onHeadlerForScroll(callback) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
//@ts-ignore
  function preventDefault(e) {
    if (!callback(e)) {
      e.preventDefault();
    }
  }
//@ts-ignore
  function preventDefaultForScrollKeys(e) {
    //@ts-ignore
    if (keys[e.keyCode]) {
      if (!callback(e)) {
        e.preventDefault();
        return false;
      }
    }
  }

 // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  // try {window.addEventListener("test", null, Object.defineProperty({}, "passive", {get: function () {supportsPassive = true;},}));} catch (e) {}

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
    &-comp
    {
      position: relative;
      font-size: 60px;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 64px;
      @apply w-[80%] text-start font-bold lg:text-[60px] text-[60px] relative lg:block hidden;
      span {
        @apply text-start font-bold lg:text-[60px] text-[60px] relative lg:block hidden;
        -webkit-text-stroke: 1.5px #000;
        color: transparent;
      }
    }
    &-mob
    {
      text-transform: uppercase;
      line-height: 64px;
      @apply text-start font-bold sm:text-[60px] text-[39px] relative lg:hidden;
      span {
        @apply text-start font-bold sm:text-[60px] relative lg:hidden;
        -webkit-text-stroke: 1.5px #000;
        color: transparent;
      }
    }
  }
  &__text {
    font-size: 20px;
    line-height: 32px;
    @apply lg:mt-[40px] lg:w-[55%] w-full sm:mt-[500px] mt-[376px];
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
      top: 10px;
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
    @apply lg:object-contain object-cover z-[-1] 2xl:right-[-400px] 2xl:bottom-[20px] xl:right-[-350px] xl:bottom-[50px] lg:bottom-[-40px] lg:right-[-152px] xl:h-[90%] lg:h-[100%] sm:object-none sm:bottom-[-35px] sm:right-[-45px] sm:w-[100%] sm:h-[100%] bottom-[148px] right-[0px] h-[60%] w-[100%];
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
        margin-top: 32px;
        @apply sm:text-[36px] text-[34px];
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
  @apply 2xl:pt-[0] lg:pt-[100px] pt-[120px];
  &__wrapper {
    @apply lg:grid flex flex-col gap-[32px] lg:grid-cols-2;
  }
  &__title {
    line-height: 56px;
    @apply sm:text-[56px] text-[46px];
  }
  &__text {
    margin-top: 24px;
    font-size: 18px;
    color:#898A8F;
    line-height: 24px;
    @apply lg:pr-[150px];
  }
  &__sm-inputs {
    @apply flex lg:flex-row flex-col lg:justify-between mt-[24px] gap-[16px]
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
    @apply lg:w-[calc(50%-10px)] w-full;
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
          @apply 2xl:left-[15px] 2xl:top-[12px] xl:left-[15px] xl:top-[10px] lg:left-[15px] sm:left-[35%];
        }
      }
      div {
        font-size: 22px;
        color:#fff;
        transform: skew(18deg);
        position: absolute;
        font-weight: 300;
        top: 10px;
        @apply lg:w-[90%] sm:w-[33%];
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
  @apply lg:block hidden;
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
    @apply pb-[80px] pt-[120px] px-[0] xl:block hidden relative;
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
    @apply flex w-full sm:flex-row justify-between sm:items-start items-center flex-col;
    margin-top: 10px;
    a {
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
      @apply sm:w-[calc(50%-10px)] w-[70%];
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
        @apply lg:left-[84px] sm:left-[110px] sm:top-[12px] left-[28%] top-[11px];
      }
    }
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
      @apply sm:w-[calc(50%-10px)] w-[70%] sm:mt-[0] mt-[13px];
      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }
      &.outline {
        background-color: #fff;
        div {
          color: #438CB4;
          @apply lg:left-[46px] sm:left-[70px] sm:top-[12px];
        }
      }
      div {
        position: absolute;
        font-size: 22px;
        font-weight: 300;
        color:#fff;
        transform: skew(18deg);
        @apply lg:left-[84px] sm:left-[110px] lg:top-[14px] top-[11px];
      }
    }
  }
}

.btn-prev {
  position: relative;
  width: 60px;
  height: 54px;
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
  img {
    position: absolute;
    top: 13px;
    left: 20px;
    font-weight: 300;
    font-size: 22px;
    color:#fff;
    transform: skew(18deg);
  }
}
.btn-next {
  position: relative;
  width: 60px;
  height: 54px;
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
  img {
    position: absolute;
    top: 13px;
    left: 23px;
    font-weight: 300;
    font-size: 22px;
    color:#fff;
    transform: skew(18deg);
  }
}

@media (max-height: 1000px) {
  .projects {
    padding-bottom: 580px;
  }
  .slider__wrapper {
    max-width: 342px;
  }
}

@media (max-height: 900px) {
  .projects__wrapper {
    margin-top: 70px;
  }
  .projects {
    padding-bottom: 480px;
  }
}

@keyframes wheel {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
