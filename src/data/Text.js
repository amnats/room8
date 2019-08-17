import React from "react";
import './Styles.css';

export const text = [
  {
    messageData:
      (<>
        <div>Привет!</div>
        <div className="Break"/>
        <div>Я бот, меня зовут room8 😊</div>
        <div>Хочу помочь тебе найти соседа мечты. Расскажи пожалуйста о себе.</div>
      </>),
    chooseData: [],
    type: 'start',
  },
  {
    messageData:
      (<>
        <div>Ты ищешь соседа с подселением к себе в квартиру или хочешь подселиться к кому-нибудь?!</div>
      </>),
    chooseData: ['Ищу себе соседа', 'Хочу подселиться'],
    type: 'chooseFlow',
  }
];