import React from 'react';
import './Landing.css';

function Landing(props) {
  return (
    <>
      <div className="LandingPromoBlock">
        <div className="LandingWrapper">
          <div className="LandingTextWrapper">
            <div className="LText Bold WhiteFont">
              Поможем быстро найти соседа
            </div>
            <div className="SText WhiteFont">
              и сэкономить до 70% на аренде квартиры
            </div>
          </div>
        </div>
      </div>

      <div className="LandingButtonBlock">
        <div onClick={() => props.appIsActiveHandler()} className="LandingButton SText WhiteFont">
          Найти соседа
        </div>
      </div>

      <div className="LandingBenefitsBlock">
        <div className="LandingBenefitsTitle Bold MText">
          Преимущества
        </div>

        <div className="LandingBenefitsItem">
          <div className="LandingBenefitsItemLine"/>
          <div className="LandingBenefitsItemContent">
            <div className="LandingBenefitsItemTitle Bold">
              Экономьте время
            </div>
            <div className="LandingBenefitsItemDescription SText">
              Вам не нужно просматривать сотни анкет — мы будем высылать персонализированные подборки каждую неделю
            </div>
          </div>
        </div>

        <div className="LandingBenefitsItem">
          <div className="LandingBenefitsItemLine"/>
          <div className="LandingBenefitsItemContent">
            <div className="LandingBenefitsItemTitle Bold">
              Найдите соседа мечты
            </div>
            <div className="LandingBenefitsItemDescription SText">
              Ответьте на несколько вопросов и мы подберем наиболее подходящих кандидатов
            </div>
          </div>
        </div>

        <div className="LandingBenefitsItem">
          <div className="LandingBenefitsItemLine"/>
          <div className="LandingBenefitsItemContent">
            <div className="LandingBenefitsItemTitle Bold">
              Платите меньше за аренду
            </div>
            <div className="LandingBenefitsItemDescription SText">
              Чем быстрее мы подберем вам соседа, тем скорее вы начнете делить с соседом плату за квартиру
            </div>
          </div>
        </div>

        <div className="LandingButtonBlock">
          <div onClick={() => props.appIsActiveHandler()} className="LandingButton SText WhiteFont">
            Найти соседа
          </div>
        </div>

        <div className="LandingContacts">
          <div className="LandingContactsTitle Bold MText">
            Контакты
          </div>
          <div className="LandingEmail SText">
            <a href="mailto:room8.staff@inbox.ru">room8.staff@inbox.ru</a>
          </div>
        </div>


      </div>
    </>
  );
}

export default Landing;
