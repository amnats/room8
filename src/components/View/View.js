import React from 'react';
import './View.css';
import Message from '../Message/Message';
import Button from "../Controls/Button/Button";
import {textHandler} from "../../data/Text";

class View extends React.Component {
  state = {
    type: '',
    index: 0,
    dataForCollect: [],
    chooseData: [],
    messageData: '',
    questionsQuantity: 10,
    inputs: [],
    currentValue: '',
  };

  updateStateHandler = (type, messageData, chooseData, index) => {
    this.setState({
      type,
      messageData,
      chooseData,
      index,
    });
  };

  inputHandler = (e) => {
    this.setState({
      currentValue: e.target.value,
    });
  };

  componentDidMount() {
    const {messageData, chooseData, type} = textHandler('start', 0, this.inputHandler, this.state.currentValue);
    this.updateStateHandler(type, messageData, chooseData, 0);
  }

  nextHandler = (el) => {
    if (el === 'Далее' && this.state.index === 0 && this.state.type === 'start') {
      const {messageData, chooseData, type} = textHandler('start', 1, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 1);
    }

    if (el === 'Далее' && this.state.index === 1 && this.state.type === 'start') {
      const {messageData, chooseData, type} = textHandler('roommates', 1, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 1);
    }

    // if (el === 'Ищу себе соседа') {
    //   const {messageData, chooseData, type} = textHandler('roommates', 1);
    //   this.updateStateHandler(type, messageData, chooseData, 1);
    // }

    if (el === 'Отправить' && this.state.type === 'roommates' && this.state.index === 1) {
      const {messageData, chooseData, type} = textHandler('roommates', 2, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 2);
    }

    if (this.state.type === 'roommates' && this.state.index === 2) {
      const {messageData, chooseData, type} = textHandler('roommates', 3, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 3);
    }

    if (this.state.type === 'roommates' && this.state.index === 3) {
      const {messageData, chooseData, type} = textHandler('roommates', 4, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 4);
    }

    if (this.state.type === 'roommates' && this.state.index === 4) {
      const {messageData, chooseData, type} = textHandler('roommates', 5, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 5);
    }

    if (this.state.type === 'roommates' && this.state.index === 5) {
      const {messageData, chooseData, type} = textHandler('roommates', 6, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 6);
    }

    if (this.state.type === 'roommates' && this.state.index === 6) {
      const {messageData, chooseData, type} = textHandler('roommates', 7, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 7);
    }

    if (this.state.type === 'roommates' && this.state.index === 7) {
      const {messageData, chooseData, type} = textHandler('roommates', 8, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 8);
    }

    if (this.state.type === 'roommates' && this.state.index === 8) {
      const {messageData, chooseData, type} = textHandler('last', 0, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 8);
    }

    if (this.state.currentValue) {
      this.setState({
        inputs: this.state.inputs.concat(this.state.currentValue),
      })
    }

    this.setState({
      questionsQuantity: this.state.questionsQuantity - 1,
      dataForCollect: this.state.dataForCollect.concat(el),
      currentValue: '',
    });
  };

  render() {
    console.log(this.state);
    const {messageData, chooseData} = this.state;
    let buttonsInChooseData = [];

    if (chooseData.length) {
      buttonsInChooseData = chooseData.map((el, index) => {
        return <Button key={index} onClick={() => this.nextHandler(el)} text={el} />
      });
    }

    let buttons = <div className="ButtonsWrapper">{buttonsInChooseData}</div>;

    if (buttonsInChooseData.length > 2) {
      buttons = <div className="ButtonsWrapperMultiple">{buttonsInChooseData}</div>;
    }

    return (
      <div className="View">
        {this.state.questionsQuantity ? <div className='QuestionsQuantity'>Осталось вопросов: {this.state.questionsQuantity}</div> : ''}
        <Message
          type={this.state.type}
          index={this.state.index}
          value={this.state.currentValue}
          inputHandler={this.inputHandler}>{messageData}</Message>
        {buttons}
      </div>
    );
  }
}

export default View;
