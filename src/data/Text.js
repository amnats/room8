import React from "react";
import './Styles.css';

export const data = {
  greeting: {

  }
};

export const textHandler = (type, index, inputHandler, currentInput) => {

  if (type === 'start' && index === 0) {
    return   {
      messageData:
        (<>
          <div>Привет!</div>
          <div className="Break"/>
          <div>Я бот, меня зовут room8 😊</div>
          <div>Я хочу помочь вам найти соседа мечты. Расскажите пожалуйста о себе.</div>
        </>),
      chooseData: ['Далее'],
      type: 'start',
      name: 'greeting',
    };
  }

  if (type === 'start' && index === 1) {
    return   {
      messageData:
        (<>
          <div>Оставьте email для связи</div>
        </>),
      chooseData: ['Далее'],
      type: 'start',
      name: 'email',
    };
  }

  if (type === 'roommates' && index === 1) {
    return {
      messageData:
        (<>
          <div>Где вы хотите жить? Подойдет станция метро или район.</div>
        </>),
      chooseData: ['Отправить'],
      type: 'roommates',
      name: 'location',
    };
  }

  if (type === 'roommates' && index === 2) {
    return {
      messageData:
        (<>
          <div>Сколько времени вы готовы потратить на поиск?</div>
        </>),
      chooseData: ['меньше недели', 'меньше месяца', 'больше месяца'],
      type: 'roommates',
      name: 'timeForSearch',
    };
  }

  if (type === 'roommates' && index === 3) {
    return {
      messageData:
        (<>
          <div>Опишите свой род деятельности.</div>
        </>),
      chooseData: ['Студент', 'IT', 'Юрист', 'Журналист', 'Дизайнер', 'Врач', 'Другое'],
      type: 'roommates',
      name: 'job',
    };
  }

  if (type === 'roommates' && index === 4) {
    return {
      messageData:
        (<>
          <div>Какое слово лучше всего описывает вас?</div>
        </>),
      chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
      type: 'roommates',
      name: 'bestWord',
    };
  }

  if (type === 'roommates' && index === 5) {
    return {
      messageData:
        (<>
          <div>Какое слово хуже всего описывает вас?</div>
        </>),
      chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
      type: 'roommates',
      name: 'worstWord',
    };
  }

  if (type === 'roommates' && index === 6) {
    return {
      messageData:
        (<>
          <div>Продолжите предложение.</div>
          <div>Я предпочитаю завтракать ...</div>
        </>),
      chooseData: ['в одиночестве', 'с собеседником'],
      type: 'roommates',
      name: 'breakfast',
    };
  }

  if (type === 'roommates' && index === 7) {
    return {
      messageData:
        (<>
          <div>Сколько вам лет?</div>
        </>),
      chooseData: ['Отправить'],
      type: 'roommates',
      name: 'age',
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
      name: 'additionalComments',
    };
  }

  if (type === 'last' && index === 0) {
    return {
      messageData:
        (<>
          <div>Спасибо!</div>
          <div>Я обработаю информацию и в течение недели буду высылать вам подходящие анкеты.</div>
        </>),
      chooseData: [],
      type: 'last',
      name: 'finish',
    };
  }

};