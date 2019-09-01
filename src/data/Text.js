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
  type: 'info',
  name: 'greeting',
}, {
  messageData: (<>
    <div>Оставьте email для связи</div>
  </>),
  chooseData: ['Далее'],
  type: 'text_input',
  name: 'email',
}, {
  messageData: (<>
    <div>Где вы хотите жить? Подойдет станция метро или район.</div>
  </>),
  chooseData: ['Далее'],
  type: 'text_input',
  name: 'location',
}, {
  messageData: (<>
    <div>Сколько времени вы готовы потратить на поиск?</div>
  </>),
  chooseData: ['меньше недели', 'меньше месяца', 'больше месяца'],
  type: 'single_choice_button',
  name: 'timeForSearch',
}, {
  messageData: (<>
    <div>Опишите свой род деятельности.</div>
  </>),
  chooseData: ['Студент', 'IT', 'Юрист', 'Журналист', 'Дизайнер', 'Врач', 'Другое'],
  type: 'single_choice_button',
  name: 'job',
}, {
  messageData: (<>
    <div>Какое слово лучше всего описывает вас?</div>
  </>),
  chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
  type: 'single_choice_button',
  name: 'bestWord',
}, {
  messageData: (<>
    <div>Какое слово хуже всего описывает вас?</div>
  </>),
  chooseData: ['Спортсмен', 'Домосед', 'Киноман', 'Кулинар', 'Хайпожор'],
  type: 'single_choice_button',
  name: 'worstWord',
}, {
  messageData: (<>
    <div>Продолжите предложение.</div>
    <div>Я предпочитаю завтракать ...</div>
  </>),
  chooseData: ['в одиночестве', 'с собеседником'],
  type: 'single_choice_button',
  name: 'breakfast',
}, {
  messageData: (<>
    <div>Сколько вам лет?</div>
  </>),
  chooseData: ['Отправить'],
  type: 'text_input',
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