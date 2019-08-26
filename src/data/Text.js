import React from "react";
import './Styles.css';

// ветвление вопросов можно реализовать как объект в массиве, внутри которого находятся массивы с вопросами (по одному на ветку)
export const blocks = [{
  messageData: (<>
    <div>Привет!</div>
    <div className="Break"/>
    <div>Меня зовут room8, я - бот <span role="img" aria-label="Happy Face">😊</span></div>
    <div>Я хочу помочь вам найти соседа мечты. Расскажите пожалуйста о себе.</div>
  </>),
  chooseData: ['Далее'],
  type: 'start',
  name: 'greeting',
}, {
  messageData: (<>
    <div>Оставьте email для связи</div>
  </>),
  chooseData: ['Далее'],
  type: 'start',
  name: 'email',
}, {
  messageData: (<>
    <div>Где вы хотите жить? Подойдет станция метро или район.</div>
  </>),
  chooseData: ['Далее'],
  type: 'roommates',
  name: 'location',
}, {
  messageData: (<>
    <div>Сколько времени вы готовы потратить на поиск?</div>
  </>),
  chooseData: ['меньше недели', 'меньше месяца', 'больше месяца'],
  type: 'roommates',
  name: 'timeForSearch',
}, {
  messageData: (<>
    <div>Опишите свой род деятельности.</div>
  </>),
  chooseData: ['Студент', 'IT', 'Юрист', 'Журналист', 'Дизайнер', 'Врач', 'Другое'],
  type: 'roommates',
  name: 'job',
}, {
  messageData: (<>
    <div>Какое слово лучше всего описывает вас?</div>
  </>),
  chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
  type: 'roommates',
  name: 'bestWord',
}, {
  messageData: (<>
    <div>Какое слово хуже всего описывает вас?</div>
  </>),
  chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
  type: 'roommates',
  name: 'worstWord',
}, {
  messageData: (<>
    <div>Продолжите предложение.</div>
    <div>Я предпочитаю завтракать ...</div>
  </>),
  chooseData: ['в одиночестве', 'с собеседником'],
  type: 'roommates',
  name: 'breakfast',
}, {
  messageData: (<>
    <div>Сколько вам лет?</div>
  </>),
  chooseData: ['Отправить'],
  type: 'roommates',
  name: 'age',
}, {
  messageData: (<>
    <div>Дополнительный комментарий</div>
  </>),
  chooseData: ['Отправить'],
  type: 'roommates',
  name: 'additionalComments',
}, {
  messageData: (<>
    <div>Спасибо!</div>
    <div>Я обработаю информацию и в течение недели буду высылать вам подходящие анкеты.</div>
  </>),
  chooseData: [],
  type: 'last',
  name: 'finish',
}];

function getFlattened() {

}

let next = 0;
const flattened = blocks.forEach(
  function(acc, curr, index, arr) {
    if (curr.blocks) {
      // recursion
    }

    next = index + 1;
    if (next === arr.length) {
      next = null;
    }

    return acc.concat[{
      ...curr,
      next: next
    }]
  },
  []
)

export const textHandler = (type, index, inputHandler, currentInput) => {

  if (type === 'start' && index === 0) {
    return   {
      messageData:
        (<>
          <div>Привет!</div>
          <div className="Break"/>
          <div>Меня зовут room8, я - бот <span role="img" aria-label="Happy Face">😊</span></div>
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