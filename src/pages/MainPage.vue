<template>
  <div v-if="notError == 500">
    <ServerError />
  </div>
  <div v-if="notError == 404">
    <NotFound />
  </div>
  <div v-if="notError == 200">
    <HeaderVue />
    <section class="promo">
      <img id="bg1" src="@/shared/images/bg-1.png" alt="background">
      <img src="@/shared/images/promo-pic.png" class="promo__pic" alt="promo pic">
      <div class="container">
        <div class="promo__title-comp">
          <span>Путь в тысячу миль <br>начинается</span> с одного шага
        </div>
        <div class="promo__title-mob">
          <span>Путь в тысячу<br> миль начинается<br></span> с одного <br>шага
        </div>
        <div class="promo__text">
        <span class="lg:contents hidden text-[20px]">
          Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса.
        В основе наших проектов лежат идеи,
        основанные на аналитике, креативе и технологиях.
        </span>
          <span class="lg:hidden block text-start">
          Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса.
        </span>
        </div>

        <div class="flex lg:justify-start justify-center items-center">
          <a href="#form" class="promo__btn">
            <div>Оставить заявку</div>
          </a>
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
    <section class="bg-2" id="projects">
      <!--    <img src="@/shared/images/bg-2.png" class="bg2" alt="background">-->
      <div class="mt-[160px] lg:hidden block">
        <div class="container">
          <p class="text-[#14161F] text-[30px] leading-[40px]">Проекты</p>
          <div class="flex w-full items-center gap-[15px] justify-between mt-[32px]">
            <button @click="projectCount == 1 ? projectCount = maxCountProject : projectCount--" class="btn-prev">
              <img src="@/shared/images/arrow-mob-prev.svg">
            </button>
            <div class="flex flex-col items-center justify-between w-[55%]">
            <span
                class="text-[#14161F] text-[22px] tracking-[0.22px] lg:text-start text-center leading-[32px]">{{ projects != null ? projects.data.attributes.roadOfProjects[projectCount - 1].project.data.attributes.name : '' }}</span>
              <div class="text-[#898A8F] text-[16px] lg:text-start text-center font-normal tracking-[0.16px] leading-[16px]">
                {{projects != null ? projects.data.attributes.roadOfProjects[projectCount - 1].project.data.attributes.categories.data[0].attributes.name : '' }}
              </div>
            </div>
            <button @click="projectCount == maxCountProject ? projectCount = 1 : projectCount++" class="btn-next">
              <img src="@/shared/images/arrow-mob-next.svg">
            </button>
          </div>
          <ProjectMobile v-for="(item,index) in projects != null ? projects.data.attributes.roadOfProjects : []" :key="index" :index="index + 1" :project-count="projectCount" :project="item" />
        </div>
      </div>
      <div ref="projectsSection" class="projects" id="projects">
        <div class="container">
          <div class="projects__title">Проекты</div>
          <div class="projects__road">
            <button style="display: none;" ref="prevButton" class="projects__road-btn-left" @click="() => {projectCount == 1 ? projectCount = maxCountProject : projectCount-- ;setActiveProject(projectCount);}">
              Назад</button>
            <img src="@/shared/images/road.png" class="projects__road-img">
            <div class="flex w-[85%] justify-around ml-[60px]">
              <div ref="projectsText0" class="projects__road-text active" id="tr0">
                <div ref="projectLine0" class="line active"></div>
                <button @click="() => {projectCount = 1;setActiveProject(projectCount);}" ref="projectPoint0" class="line__point active">
                  <div class="line__point-center"></div>
                </button>
                <span>{{projects != null ? projects.data.attributes.roadOfProjects[0].project.data.attributes.name : ''}}</span>
                <p>{{projects != null ? getTime(projects.data.attributes.roadOfProjects[0].project.data.attributes.dateOfRelease) : ''}}</p>
              </div>
              <div ref="projectsText1" class="projects__road-text" id="tr1">
                <div ref="projectLine1" class="line"></div>
                <button @click="() => {projectCount = 2;setActiveProject(projectCount);}" ref="projectPoint1" class="line__point">
                  <div class="line__point-center"></div>
                </button>
                <span>{{projects != null ? projects.data.attributes.roadOfProjects[1].project.data.attributes.name : ''}}</span>
                <p>{{projects != null ? getTime(projects.data.attributes.roadOfProjects[1].project.data.attributes.dateOfRelease) : ''}}</p>
              </div>
              <div ref="projectsText2" class="projects__road-text" id="tr2">
                <div ref="projectLine2"  class="line"></div>
                <button @click="() => {projectCount = 3;setActiveProject(projectCount);}" ref="projectPoint2" class="line__point">
                  <div class="line__point-center"></div>
                </button>
                <span>{{projects != null ? projects.data.attributes.roadOfProjects[2].project.data.attributes.name : ''}}</span>
                <p>{{projects != null ? getTime(projects.data.attributes.roadOfProjects[2].project.data.attributes.dateOfRelease) : ''}}</p>
              </div>
              <div ref="projectsText3" class="projects__road-text" id="tr3">
                <div ref="projectLine3" class="line"></div>
                <button @click="() => {projectCount = 4;setActiveProject(projectCount);}" ref="projectPoint3"  class="line__point">
                  <div class="line__point-center"></div>
                </button>
                <span>{{projects != null ? projects.data.attributes.roadOfProjects[3].project.data.attributes.name : ''}}</span>
                <p>{{projects != null ? getTime(projects.data.attributes.roadOfProjects[3].project.data.attributes.dateOfRelease) : ''}}</p>
              </div>
            </div>
            <span ref="bike" class="projects__road-bike tr0" style="transform: translateX(40px);">
                    <img src="@/shared/images/bike.png">
                    <img src="@/shared/images/wheel-1.png" class="projects__road-wheel1">
                    <img src="@/shared/images/wheel-2.png" class="projects__road-wheel2">
                </span>
            <button v-if="projectCount < maxCountProject" class="projects__road-btn" @click="() => {projectCount == maxCountProject ? projectCount = 1 : projectCount++ ;setActiveProject(projectCount);}">
              Вперед</button>
          </div>
          <div ref="projectsWrap" class="projects__test">
            <div ref="projectsWrapper1" class="projects__wrapper active">
              <div class="projects__descr">
                <div class="projects__name">{{projects != null ? projects.data.attributes.roadOfProjects[0].project.data.attributes.name : ''}}</div>
                <div class="projects__name-descr">{{projects != null ? projects.data.attributes.roadOfProjects[0].project.data.attributes.categories.data[0].attributes.name : ''}}</div>
                <div class="projects__text">
                  {{projects != null ? projects.data.attributes.roadOfProjects[0].project.data.attributes.description : ''}}
                </div>
                <div class="projects__tags">
                  <StackItem v-for="(item,index) in projects != null ? projects.data.attributes.roadOfProjects[0].project.data.attributes.technologies : [{id:'', name:''}] " :key="index" :text="item.name" />
                </div>
                <div class="projects__buttons">
                  <router-link :to="'/project/' + (projects != null ? projects.data.attributes.roadOfProjects[0].project.data.id : 0)">
                    <div>Подробнее</div>
                  </router-link>
                  <router-link to="/projects" class="outline">
                    <div>Все проекты</div>
                  </router-link>
                </div>
              </div>
              <div class="h-full">
                <SliderVue :urlImages="urlImageFirst"/>
              </div>

            </div>
            <div ref="projectsWrapper2" class="projects__wrapper ">
              <div class="projects__descr">
                <div class="projects__name">{{projects != null ? projects.data.attributes.roadOfProjects[1].project.data.attributes.name : ''}}</div>
                <div class="projects__name-descr">{{projects != null ? projects.data.attributes.roadOfProjects[1].project.data.attributes.name : ''}}</div>
                <div class="projects__text">
                  {{projects != null ? projects.data.attributes.roadOfProjects[1].project.data.attributes.description : ''}}
                </div>
                <div class="projects__tags">
                  <StackItem v-for="(item,index) in projects != null ? projects.data.attributes.roadOfProjects[1].project.data.attributes.technologies : [{id:'', name:''}] " :key="index" :text="item.name" />
                </div>
                <div class="projects__buttons">
                  <router-link :to="'/project/' + (projects != null ? projects.data.attributes.roadOfProjects[1].project.data.id : 0)">
                    <div>Подробнее</div>
                  </router-link>
                  <router-link to="/projects" class="outline">
                    <div>Все проекты</div>
                  </router-link>
                </div>
              </div>
              <div class="h-full">
                <SliderVue :urlImages="urlImageSecond"/>
              </div>
            </div>
            <div  ref="projectsWrapper3" class="projects__wrapper ">
              <div class="projects__descr">
                <div class="projects__name">{{projects != null ? projects.data.attributes.roadOfProjects[2].project.data.attributes.name : ''}}</div>
                <div class="projects__name-descr">{{projects != null ? projects.data.attributes.roadOfProjects[2].project.data.attributes.categories.data[0].attributes.name : ''}}</div>
                <div class="projects__text">
                  {{projects != null ? projects.data.attributes.roadOfProjects[2].project.data.attributes.description : ''}}
                </div>
                <div class="projects__tags">
                  <StackItem v-for="(item,index) in projects != null ? projects.data.attributes.roadOfProjects[2].project.data.attributes.technologies : [{id:'', name:''}] " :key="index" :text="item.name" />
                </div>
                <div class="projects__buttons">
                  <router-link :to="'/project/' + (projects != null ? projects.data.attributes.roadOfProjects[2].project.data.id : 0)">
                    <div>Подробнее</div>
                  </router-link>
                  <router-link to="/projects" class="outline">
                    <div>Все проекты</div>
                  </router-link>
                </div>
              </div>
              <div class="h-full">
                <SliderVue :urlImages="urlImageThird"/>
              </div>
            </div>
            <div ref="projectsWrapper4" class="projects__wrapper">
              <div class="projects__descr">
                <div class="projects__name">{{projects != null ? projects.data.attributes.roadOfProjects[3].project.data.attributes.name : ''}}</div>
                <div class="projects__name-descr">{{projects != null ? projects.data.attributes.roadOfProjects[3].project.data.attributes.name : ''}}</div>
                <div class="projects__text">
                  {{projects != null ? projects.data.attributes.roadOfProjects[3].project.data.attributes.description : ''}}
                </div>
                <div class="projects__tags">
                  <StackItem v-for="(item,index) in projects != null ? projects.data.attributes.roadOfProjects[3].project.data.attributes.technologies : [{id:'', name:''}] " :key="index" :text="item.name" />
                </div>
                <div class="projects__buttons">
                  <router-link :to="'/project/' + (projects != null ? projects.data.attributes.roadOfProjects[3].project.data.id : 0)">
                    <div>Подробнее</div>
                  </router-link>
                  <router-link to="/projects" class="outline">
                    <div>Все проекты</div>
                  </router-link>
                </div>
              </div>
              <div class="">
                <SliderVue :urlImages="urlImageFourth"/>
              </div>

            </div>
          </div>
        </div>
      </div>
      <section class="form" id="form">
        <FormVue />
      </section>
    </section>
    <FooterVue/>
  </div>
</template>


<script setup lang="ts">
import FooterVue from "@/widgets/footer/FooterVue.vue";
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {computed, ref} from "vue";
import ProjectMobile from "@/widgets/projectsMain/ProjectMobile.vue";
import {responseHomepage} from "@/app/http/request";
import StackItem from "@/features/StackText/StackItem.vue";
import FormVue from "@/widgets/form/FormVue.vue";
import type {homepageType} from "@/entities/types/homepage/homepageType";
import HeaderVue from "@/widgets/headers/HeaderVue.vue";
import NotFound from "@/pages/NotFound.vue";
import ServerError from "@/pages/ServerError.vue";

let notError = ref(200);
let projectCount = ref(1)
let maxCountProject = ref(4)
let projects = ref<homepageType | null>(null)

async function responseProject()
{
  let response = await responseHomepage()
  projects.value = response

}
responseProject()

const urlImageFirst = computed(() => {
  let images : Array<string> = []
  if(projects.value != null && projects.value.data.attributes.roadOfProjects[0].project.data.attributes.gallery != null) {
    projects.value.data.attributes.roadOfProjects[0].project.data.attributes.gallery.data.forEach((image) => {
      images.push(image.attributes.url)
    })
  }
  return images
})
const urlImageSecond = computed(() => {
  let images : Array<string> = []
  if(projects.value != null && projects.value.data.attributes.roadOfProjects[1].project.data.attributes.gallery != null) {
    projects.value.data.attributes.roadOfProjects[1].project.data.attributes.gallery.data.forEach((image) => {
      images.push(image.attributes.url)
    })
  }
  return images
})
const urlImageThird = computed(() => {
  let images : Array<string> = []
  if(projects.value != null && projects.value.data.attributes.roadOfProjects[2].project.data.attributes.gallery != null) {
    projects.value.data.attributes.roadOfProjects[2].project.data.attributes.gallery.data.forEach((image) => {
      images.push(image.attributes.url)
    })
  }
  return images
})
const urlImageFourth = computed(() => {
  let images : Array<string> = []
  if(projects.value != null && projects.value.data.attributes.roadOfProjects[3].project.data.attributes.gallery != null) {
    projects.value.data.attributes.roadOfProjects[3].project.data.attributes.gallery.data.forEach((image) => {
      images.push(image.attributes.url)
    })
  }
  return images
})

function getTime(time?: string)
{
  let readyTime = ''
  if(typeof time != 'undefined')
  {
    readyTime = Intl.DateTimeFormat('ru', {day: "numeric",month:"long", year: "numeric"}).format(new Date(time))
  }
  return readyTime
}
//main script

const projectsSection = ref<HTMLElement | null>(null);
const projectsWrap = ref<HTMLElement | null>(null);
const projectsWrapper1 = ref<HTMLElement | null>(null);
const projectsWrapper2 = ref<HTMLElement | null>(null);
const projectsWrapper3 = ref<HTMLElement | null>(null);
const projectsWrapper4 = ref<HTMLElement | null>(null);
const bike = ref<HTMLElement | null>(null);
const projectsText0 = ref<HTMLElement | null>(null);
const projectsText1 = ref<HTMLElement | null>(null);
const projectsText2 = ref<HTMLElement | null>(null);
const projectsText3 = ref<HTMLElement | null>(null);
const projectLine0 = ref<HTMLElement | null>(null);
const projectLine1 = ref<HTMLElement | null>(null);
const projectLine2 = ref<HTMLElement | null>(null);
const projectLine3 = ref<HTMLElement | null>(null);
const projectPoint0 = ref<HTMLElement | null>(null);
const projectPoint1 = ref<HTMLElement | null>(null);
const projectPoint2 = ref<HTMLElement | null>(null);
const projectPoint3 = ref<HTMLElement | null>(null);
const prevButton = ref<HTMLElement | null>(null)

const bikePosition = ref(35)
const projectsOffset = ref(1380);
const prevCount = ref(1)
function setActiveProject(number : number) {
  if (number == 1 && projectPoint3.value != null && projectPoint2.value != null && projectPoint1.value != null && projectPoint0.value != null && projectLine3.value != null && projectLine2.value != null && projectLine1.value != null && projectLine0.value != null && projectsText3.value != null && projectsWrapper4.value != null && projectsWrap.value != null && projectsWrapper1.value != null && projectsWrapper2.value != null && projectsWrapper3.value != null && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {
    projectsWrap.value.style.transform = "translateX(" + 0 + "px)";
    projectsWrapper1.value.classList.add("active");
    projectsWrapper2.value.classList.remove("active");
    projectsWrapper3.value.classList.remove("active");
    projectsWrapper4.value.classList.remove("active");
    projectsText0.value.classList.add("active");
    projectsText2.value.classList.remove("active");
    projectsText1.value.classList.remove("active");
    projectsText3.value.classList.remove("active");
    projectLine0.value.classList.add("active");
    projectLine1.value.classList.remove("active");
    projectLine2.value.classList.remove("active");
    projectLine3.value.classList.remove("active");
    projectPoint0.value.classList.add("active");
    projectPoint1.value.classList.remove("active");
    projectPoint2.value.classList.remove("active");
    projectPoint3.value.classList.remove("active");
    prevCount.value = 1
    bikePosition.value = 35;
  }
  if(number == 2 && projectPoint3.value != null && projectPoint2.value != null && projectPoint1.value != null && projectPoint0.value != null && projectLine3.value != null && projectLine2.value != null && projectLine1.value != null && projectLine0.value != null && projectsText3.value != null && projectsWrapper4.value != null && projectsWrap.value != null && projectsWrapper1.value != null && projectsWrapper2.value != null && projectsWrapper3.value != null && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {    projectsWrap.value.style.transform = "translateX(" + -projectsOffset.value + "px)";
    if(prevCount.value == 1){projectLine0.value.classList.add("open");}
    projectsWrapper1.value.classList.remove("active");
    projectsWrapper3.value.classList.remove("active");
    projectsWrapper2.value.classList.add("active");
    projectsWrapper4.value.classList.remove("active");
    projectsText0.value.classList.remove("active");
    projectsText2.value.classList.remove("active");
    projectsText1.value.classList.add("active");
    projectsText3.value.classList.remove("active");
    projectLine1.value.classList.add("active")
    projectLine2.value.classList.remove("active");
    projectLine3.value.classList.remove("active");
    projectPoint1.value.classList.add("active");
    projectPoint2.value.classList.remove("active");
    projectPoint3.value.classList.remove("active");
    if(prevCount.value == 1)
    {
      setTimeout(() => {
        if(projectLine0.value != null && projectPoint0.value != null)
        {
          projectLine0.value.classList.remove("open")
          projectLine0.value.classList.remove("active")
          projectPoint0.value.classList.remove("active")
        }
      },1500)
      prevCount.value = 2
    }
    if(prevCount.value == 1)
    {
      setTimeout(() => {
        if(projectLine0.value != null && projectPoint0.value != null) {
          projectLine0.value.classList.remove("active")
          projectLine0.value.classList.remove("open")
          projectPoint0.value.classList.remove("active")
        }
      },1500)
      prevCount.value = 2
    }else
    {
      setTimeout(() => {
        if(projectLine0.value != null && projectPoint0.value != null) {

          projectLine0.value.classList.remove("active")
          projectPoint0.value.classList.remove("active")
        }
      }, 1500)

    }

    bikePosition.value = 325;
  }
  if(number == 3 && projectPoint3.value != null && projectPoint2.value != null && projectPoint1.value != null && projectPoint0.value != null && projectLine3.value != null && projectLine2.value != null && projectLine1.value != null && projectLine0.value != null && projectsText3.value != null && projectsWrapper4.value != null && projectsWrap.value != null && projectsWrapper1.value != null && projectsWrapper2.value != null && projectsWrapper3.value != null && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {    projectsWrap.value.style.transform =
        "translateX(" + -projectsOffset.value * 2 + "px)";
    if(prevCount.value == 2){projectLine1.value.classList.add("open")}
    projectsWrapper1.value.classList.remove("active");
    projectsWrapper2.value.classList.remove("active");
    projectsWrapper3.value.classList.add("active");
    projectsWrapper4.value.classList.remove("active");
    projectsText0.value.classList.remove("active");
    projectsText1.value.classList.remove("active");
    projectsText2.value.classList.add("active");
    projectsText3.value.classList.remove("active");
    projectLine0.value.classList.remove("active");
    projectLine2.value.classList.add("active");
    projectLine3.value.classList.remove("active");
    projectPoint0.value.classList.remove("active");
    projectPoint2.value.classList.add("active");
    projectPoint3.value.classList.remove("active");
    bikePosition.value = 577;
    projectLine1.value.classList.add("open")

    if(prevCount.value == 2)
    {
      setTimeout(() => {
        if(projectLine1.value != null && projectPoint1.value != null) {
          projectLine1.value.classList.remove("active")
          projectLine1.value.classList.remove("open")
          projectPoint1.value.classList.remove("active")
        }
      },1500)
      prevCount.value = 3
    }else
    {
      projectLine1.value.classList.remove("active")
      projectPoint1.value.classList.remove("active")
      projectLine1.value.classList.remove("open")
      prevCount.value = 3
    }
  }
  if(number == 4 && projectPoint3.value != null && projectPoint2.value != null && projectPoint1.value != null && projectPoint0.value != null && projectLine3.value != null && projectLine2.value != null && projectLine1.value != null && projectLine0.value != null && projectsText3.value != null && projectsWrapper4.value != null && projectsWrap.value != null && projectsWrapper1.value != null && projectsWrapper2.value != null && projectsWrapper3.value != null && projectsText0.value != null && projectsText1.value != null && projectsText2.value != null) {    projectsWrap.value.style.transform =
        "translateX(" + -4140 + "px)";
    if(prevCount.value == 3){projectLine2.value.classList.add("open")}
    projectsWrapper1.value.classList.remove("active");
    projectsWrapper2.value.classList.remove("active");
    projectsWrapper3.value.classList.remove("active");
    projectsWrapper4.value.classList.add("active");
    projectsText0.value.classList.remove("active");
    projectsText1.value.classList.remove("active");
    projectsText2.value.classList.remove("active");
    projectsText3.value.classList.add("active");
    projectLine0.value.classList.remove("active");
    projectLine1.value.classList.remove("active");
    projectLine3.value.classList.add("active");
    projectPoint0.value.classList.remove("active");
    projectPoint1.value.classList.remove("active");
    projectPoint3.value.classList.add("active");
    bikePosition.value = 840;
    projectLine2.value.classList.add("open")
    if(prevCount.value == 3)
    {
      setTimeout(() => {
        if(projectLine2.value != null && projectPoint2.value != null) {
          projectLine2.value.classList.remove("active")
          projectLine2.value.classList.remove("open")
          projectPoint2.value.classList.remove("active")
        }
      },1500)
      prevCount.value = 4
    }else
    {
      projectLine2.value.classList.remove("active")
      projectLine2.value.classList.remove("open")
      projectPoint2.value.classList.remove("active")
      prevCount.value = 4
    }
  }
  setTimeout(() => {
    if(number > 1 && prevButton.value != null)
    {
      prevButton.value.style.display = 'block';
    }else if(prevButton.value != null){
      prevButton.value.style.display = 'none';
    }
  }, 1000)
  setTimeout(() => {
    if (bike.value != null) {
      bike.value.classList.add("tr");
      bike.value.style.transform = "translateX(" + bikePosition.value + "px)";
      bike.value.style.transition = "all 0.65s ease-in";
    }
  } ,500)

  setTimeout(() => {
    if (bike.value != null) {
      bike.value.classList.remove("tr")
    }
  }, 1600);
}
</script>

<style lang="postcss" scoped>
.bg-2 {
  padding-top: 1px;
  background-image: url(@/shared/images/bg-2.png);
  background-position: bottom;
  background-repeat: no-repeat;

  @apply 2xl:w-[102%] 2xl:mt-[120px] mt-[60px] 2xl:ml-[-28px] w-full bg-cover 2xl:pb-[120px] lg:pb-[200px] pb-[200px];
}
@media (min-width: 2000px)
{
  .bg-2{
    background-image: url(@/shared/images/bg-2-4k.png);

    background-position: left;
  }
}


.line {
  transition: all 1.5s ease;
  @apply absolute ml-[-15px] mt-[33px] border-solid border-l-[2px] border-[#B9B9BC] opacity-50 w-[1px] h-[90px];

  &.active {
    @apply h-[175px] bg-[#787878] opacity-100;
  }
  &.open
  {
    @apply h-[1px]
  }

  &__point {
    transition: all 0.5s ease;
    pointer-events: all;
    @apply absolute mt-[122px] ml-[-21px] flex justify-center items-center border-solid border-[1.5px] z-[200] p-[6px] border-[#898A8F] rounded-[90px];

    &.active {
      @apply opacity-0
    }

    &-center {
      @apply absolute bg-[#898A8F] w-[4px] h-[4px] rounded-[90px];
    }
  }
}

.promo {
  @apply xl:pt-[180px] lg:pt-[100px] pt-[60px] relative;

  &__title {
    &-comp {

      position: relative;
      font-size: 60px;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 64px;
      @apply w-[100%] text-start font-bold lg:text-[60px] text-[60px] relative lg:flex hidden;

      span {
        @apply text-start font-bold lg:text-[60px] text-[60px] relative lg:contents hidden whitespace-nowrap;
        -webkit-text-stroke: 1.5px #000;
        color: transparent;
      }
    }

    &-mob {
      text-transform: uppercase;
      @apply lg:leading-[64px] leading-[36px] text-start font-black  sm:text-[40px] text-[30px] relative lg:hidden;

      span {
        @apply text-start font-bold sm:text-[40px] text-[30px] relative lg:hidden;
        -webkit-text-stroke: 1px #000;
        color: transparent;
      }
    }
  }

  &__text {
    line-height: 32px;
    @apply lg:mt-[40px] lg:w-[53%] lg:text-[20px] text-[18px] w-full sm:mt-[450px] mt-[275px];
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
      left: 66px;
      font-weight: 300;
      font-size: 22px;
      color: #fff;
      transform: skew(18deg);
    }
  }

  &__pic {
    position: absolute;
    pointer-events: none;
    @apply z-[-1] object-cover bottom-[104px] right-[-11px] h-[60%] w-[100%];
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

@media (max-width: 375px) {
  .promo {
    &__pic {
      @apply bottom-[69px] right-[0px] w-[100%] h-[69%];
    }
  }
}

@media (max-width: 425px) and (min-width: 376px) {
  .promo {
    &__pic {
      @apply bottom-[69px] right-[-11px] w-[100%] h-[69%];
    }
  }
}

@media (min-width: 640px) {
  .promo {
    &__pic {
      @apply object-none bottom-[-60px] right-[-45px] w-[100%] h-[100%];
    }
  }
}

@media (min-width: 1024px) {
  .promo {
    &__pic {
      @apply object-contain z-[-1] bottom-[-120px] right-[-322px] h-[100%];
    }
  }
}

@media (min-width: 1280px) {
  .promo {
    &__pic {
      @apply right-[-420px] bottom-[0px] h-[90%];
    }
  }
}

@media (min-width: 1536px) {
  .promo {
    &__pic {
      @apply right-[-400px] bottom-[20px];
    }
  }
}

.adv {
  @apply lg:pt-[260px] pt-[220px];

  &__title {
    @apply sm:text-[56px] text-[30px] lg:text-[40px] text-start;
  }

  &__text {
    margin-top: 8px;
    @apply lg:leading-[32px] leading-[24px] text-start lg:text-[20px] text-[18px]
  }

  &__content {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 40px 25px;
    @apply lg:grid flex flex-col;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        margin-top: 32px;
        @apply sm:text-[36px] text-[28px];
      }

      p {
        margin-top: 24px;
        @apply 2xl:w-[90%] lg:leading-[32px] leading-[24px] lg:text-[20px] text-[18px];
      }
    }
  }
}

@media (min-width: 1920px) {
  .form {
    @apply mt-[660px]
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
    &.error
    {
      @apply border-[#EE5050]
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

.projects {
  position: relative;
  @apply lg:mt-[150px] lg:block hidden;

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
    margin-top: 50px;
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    opacity: 0;
    pointer-events: none;

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }

  &__road {
    @apply pb-[120px] pt-[50px] px-[0] xl:block hidden relative;

    &-img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
      @apply z-[1];
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
      opacity: 0.5;
      pointer-events: none;
      @apply mb-[50px] ml-[130px];

      &.active {
        opacity: 1;
        pointer-events: all;
      }

      &.prev {

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
      margin-top: 45px;
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
    &-btn-left {
      margin-top: 45px;
      position: absolute;
      left: 0px;
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
      background-image: url("@/shared/images/prevbutton-bg.png");
      background-repeat: no-repeat;
      padding-right: 26px;
      object-fit: contain;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        background-image: url("@/shared/images/prevbutton-bg2.png");
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
    margin-top: 20px;
    @apply gap-[16px];

    span {
      padding: 8px 20px;
      border: 1px solid #787878;
      border-radius: 5px;
      @apply lg:text-[18px] text-[16px]
    }
  }

  &__slider {
    background-color: #B9B9BC;
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
    @apply flex w-full sm:flex-row justify-between sm:items-start items-center flex-col mt-[48px];

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

        @apply sm:mt-0 mt-[16px];

        div {
          color: #438CB4;
          @apply lg:mt-[4px] mt-0 lg:text-[22px] text-[18px] leading-[32px] lg:left-[80px] sm:left-[120px] sm:top-[10px] top-[10px];
        }
      }

      div {
        position: absolute;
        top: 14px;
        font-weight: 300;
        color: #fff;
        transform: skew(18deg);
        @apply lg:text-[22px] text-[18px] lg:left-[87px] sm:left-[115px] sm:top-[12px] left-[30%];
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
          @apply lg:left-[46px] sm:left-[90px] sm:top-[12px];
        }
      }

      div {
        position: absolute;
        font-weight: 300;
        color: #fff;
        transform: skew(18deg);
        @apply lg:text-[22px] text-[18px] lg:left-[90px] sm:left-[110px] lg:top-[14px] top-[11px];
      }
    }
  }
}

@media (max-width: 426px) and (min-width: 376px) {
  .projects__buttons {
    & a {
      & div {
        @apply left-[31%] top-[14px];
      }

      & .outline {
        & div {
          @apply left-[30%];
        }
      }
    }
  }
}

@media (max-width: 376px) and (min-width: 321px) {
  .projects__buttons {
    & a {
      & div {
        @apply left-[29%] top-[13px]
      }

      & .outline {
        & div {
          @apply left-[0%];
        }
      }
    }
  }
}

.btn-prev {
  position: relative;
  width: 46px;
  height: 44px;
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

  @media (pointer: fine)
  {
    &:hover {
      transform: skew(-18deg) translateY(2px);
      border-right: 1px solid #438CB4;
      border-bottom: 1px solid #438CB4;
    }
  }

  img {
    color: #fff;
    transform: skew(12deg);
    height: 18px;
    width: 12px;
    position: absolute;
    left: 14px;
  }
}

.btn-next {
  position: relative;
  width: 46px;
  height: 44px;
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

  @media (pointer: fine)
  {
    &:hover {
      transform: skew(-18deg) translateY(2px);
      border-right: 1px solid #438CB4;
      border-bottom: 1px solid #438CB4;
    }
  }

  img {
    transform: skew(12deg);
    height: 18px;
    width: 12px;
    position: absolute;
    left: 16px;
  }
}


@media (max-height: 900px) {
  .projects__wrapper {
    margin-top: 70px;
  }
}

@keyframes wheel {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
