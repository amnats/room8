import React from "react";
import './Styles.css';

export const textHandler = (type, index, inputHandler, currentInput) => {

  if (type === 'start' && index === 0) {
    return   {
      messageData:
        (<>
          <div>Привет!</div>
          <div className="Break"/>
          <div>Я бот, меня зовут room8 😊</div>
          <div>Хочу помочь тебе найти соседа мечты. Расскажи пожалуйста о себе.</div>
        </>),
      chooseData: ['Далее'],
      type: 'start',
    };
  }

  if (type === 'start' && index === 1) {
    return   {
      messageData:
        (<>
          <div>Пожалуйста оставь свой email для связи</div>
        </>),
      chooseData: ['Далее'],
      type: 'start',
    };
  }

  // if (type === 'chooseFlow' && index === 1) {
  //   return {
  //     messageData:
  //       (<>
  //         <div>Ты ищешь соседа с подселением к себе в квартиру или хочешь подселиться к кому-нибудь?!</div>
  //       </>),
  //     chooseData: ['Ищу себе соседа', 'Хочу подселиться'],
  //     type: 'chooseFlow',
  //   };
  // }

  if (type === 'roommates' && index === 1) {
    return {
      messageData:
        (<>
          <div>Где хочешь жить? Подойдет станция метро или район.</div>
        </>),
      chooseData: ['Отправить'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 2) {
    return {
      messageData:
        (<>
          <div>Сколько времени ты готов потратить на поиск?</div>
        </>),
      chooseData: ['< недели', '< месяца'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 3) {
    return {
      messageData:
        (<>
          <div>Опиши свой род деятельности.</div>
        </>),
      chooseData: ['Студет', 'IT', 'Юрист', 'Журналист', 'Дизайнер', 'Врач', 'Другое'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 4) {
    return {
      messageData:
        (<>
          <div>Какое слово лучше всего описывает тебя?</div>
        </>),
      chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 5) {
    return {
      messageData:
        (<>
          <div>Какое слово хуже всего описывает тебя?</div>
        </>),
      chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 6) {
    return {
      messageData:
        (<>
          <div>Закончи предложение.</div>
          <div>Я предпочитаю завтракать ...</div>
        </>),
      chooseData: ['в одиночестве', 'с собеседником'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 7) {
    return {
      messageData:
        (<>
          <div>Сколько тебе лет?</div>
        </>),
      chooseData: ['Отправить'],
      type: 'roommates',
    };
  }

  if (type === 'roommates' && index === 8) {
    return {
      messageData:
        (<>
          <div>Дополнительный комментарий</div>
        </>),
      chooseData: ['Отправить'],
      type: 'roommates',
    };
  }

  if (type === 'last' && index === 0) {
    return {
      messageData:
        (<>
          <div>Спасибо!</div>
          <div>Я обработаю информацию и в течение недели буду высылать тебе подходящие анкеты.</div>
        </>),
      chooseData: [],
      type: 'last',
    };
  }

};