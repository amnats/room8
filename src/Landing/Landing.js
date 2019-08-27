import React from 'react';
import './Landing.css';

function Landing() {
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
        <div className="LandingButton SText WhiteFont">
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
      </div>
    </>
  );
}

export default Landing;
