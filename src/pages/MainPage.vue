<template>
  <section class="promo">
    <img id="bg1" src="@/shared/images/bg-1.png" alt="background">
    <img src="@/shared/images/man.png" class="promo__pic" alt="promo pic">
    <div class="container">
      <div class="promo__title">
        <span>Путь в тысячу миль<br> начинается</span> с одного шага
      </div>
      <div class="promo__text">
        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи,
        основанные на аналитике, креативе и технологиях.
      </div>
      <button class="promo__btn">
        <div>Оставить заявку</div>
      </button>
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

  <div class="projects" id="projects">
    <img src="@/shared/images/bg-2.png" id="bg2" alt="background">
<!--    <div class="container">-->
<!--      <div class="projects__title">Проекты</div>-->
<!--      <div class="projects__road">-->
<!--        <img src="@/shared/images/road.png" class="projects__road-img">-->
<!--        <span class="projects__road-bike tr0">-->
<!--                    <img src="@/shared/images/bike.png">-->
<!--                    <img src="@/shared/images/wheel-1.png" class="projects__road-wheel1">-->
<!--                    <img src="@/shared/images/wheel-2.png" class="projects__road-wheel2">-->
<!--                    <div class="projects__road-line"></div>-->
<!--                    <div class="projects__road-text active" id="tr0">-->
<!--                        <span>Lancelot</span>-->
<!--                        <p>5 июня 2019 г.</p>-->
<!--                    </div>-->
<!--                    <div class="projects__road-text" id="tr1">-->
<!--                        <span>Lancelot 2</span>-->
<!--                        <p>23 мая 2020 г.</p>-->
<!--                    </div>-->
<!--                    <div class="projects__road-text" id="tr2">-->
<!--                        <span>Lancelot 3</span>-->
<!--                        <p>6 октября 2021 г.</p>-->
<!--                    </div>-->
<!--                </span>-->
<!--        <a href="#" class="projects__road-btn">Все проекты</a>-->
<!--      </div>-->
<!--      <div class="projects__test">-->
<!--        <div class="projects__wrapper active">-->
<!--          <div class="projects__descr">-->
<!--            <div class="projects__name">Lancelot</div>-->
<!--            <div class="projects__name-descr">Вебинарная платформа</div>-->
<!--            <div class="projects__text">-->
<!--              На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку-->
<!--              для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей-->
<!--              пройдет рассылка с напоминанием.-->
<!--            </div>-->
<!--            <div class="projects__tags">-->
<!--              <span>AWS Chalice</span>-->
<!--              <span>Lambda</span>-->
<!--              <span>Aurora Serverless Postgres</span>-->
<!--              <span>API Gateway</span>-->
<!--              <span>DynamoDB</span>-->
<!--              <span>WebSockets</span>-->
<!--              <span>Python</span>-->
<!--              <span>Git</span>-->
<!--              <span>React</span>-->
<!--            </div>-->
<!--            <div class="projects__buttons">-->
<!--              <button type="submit">-->
<!--                <div>Подробнее</div>-->
<!--              </button>-->
<!--              <button class="outline">-->
<!--                <div>Предложить проект</div>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="projects__slider">-->
<!--            <img src="@/shared/images/slider-bg.png" class="projects__slider-bg">-->
<!--            <div class="slider__wrapper">-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/slider-img-1.png">-->
<!--              </div>-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/slider-img-2.png">-->
<!--              </div>-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/slider-img-1.png">-->
<!--              </div>-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/slider-img-2.png">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="projects__wrapper ">-->
<!--          <div class="projects__descr">-->
<!--            <div class="projects__name">Lancelot 2</div>-->
<!--            <div class="projects__name-descr">Вебинарная платформа</div>-->
<!--            <div class="projects__text">-->
<!--              Таким образом, начало повседневной работы по формированию позиции играет определяющее-->
<!--              значение для своевременного выполнения сверхзадачи. Как уже неоднократно упомянуто,-->
<!--              диаграммы связей освещают чрезвычайно интересные особенности картины в целом, однако-->
<!--              конкретные выводы, разумеется, преданы социально-демократической анафеме.-->
<!--            </div>-->
<!--            <div class="projects__tags">-->
<!--              <span>AWS Chalice</span>-->
<!--              <span>Lambda</span>-->
<!--              <span>Python</span>-->
<!--              <span>Git</span>-->
<!--              <span>React</span>-->
<!--            </div>-->
<!--            <div class="projects__buttons">-->
<!--              <button type="submit">-->
<!--                <div>Подробнее</div>-->
<!--              </button>-->
<!--              <button class="outline">-->
<!--                <div>Предложить проект</div>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="projects__slider">-->
<!--            <img src="@/shared/images/slider-bg.png" class="projects__slider-bg">-->
<!--            <div class="slider__wrapper">-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/test-image-2.jpg">-->
<!--              </div>-->
<!--              <div class="@/shared/imagesder__item">-->
<!--                <img src="@/shared/images/slider-img-2.png">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="projects__wrapper ">-->
<!--          <div class="projects__descr">-->
<!--            <div class="projects__name">Lancelot 3</div>-->
<!--            <div class="projects__name-descr">Вебинарная платформа</div>-->
<!--            <div class="projects__text">-->
<!--              На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку-->
<!--              для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей-->
<!--              пройдет рассылка с напоминанием.-->
<!--            </div>-->
<!--            <div class="projects__tags">-->
<!--              <span>AWS Chalice</span>-->
<!--              <span>Lambda</span>-->
<!--              <span>Python</span>-->
<!--              <span>Git</span>-->
<!--              <span>React</span>-->
<!--            </div>-->
<!--            <div class="projects__buttons">-->
<!--              <button type="submit">-->
<!--                <div>Подробнее</div>-->
<!--              </button>-->
<!--              <button class="outline">-->
<!--                <div>Предложить проект</div>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="projects__slider">-->
<!--            <img src="@/shared/images/slider-bg.png" class="projects__slider-bg">-->
<!--            <div class="slider__wrapper">-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/test-image-3.png">-->
<!--              </div>-->
<!--              <div class="slider__item">-->
<!--                <img src="@/shared/images/slider-img-2.png">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.promo {
  padding-top: 180px;
  position: relative;
  &__title {
    position: relative;
    font-size: 60px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 64px;
    span {
      -webkit-text-stroke: 2px #000000;
      color: transparent;
    }
  }
  &__text {
    margin-top: 40px;
    font-size: 20px;
    width: 630px;
    line-height: 32px;
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
    bottom: -115px;
    right: -225px;
    pointer-events: none;
  }
  &__adv {
    margin-top: 160px;
    position: relative;
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
    font-size: 56px;
  }
  &__text {
    margin-top: 8px;
    font-size: 20px;
  }
  &__content {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 40px 25px;
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
