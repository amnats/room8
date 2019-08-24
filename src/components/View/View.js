import React from 'react';
import './View.css';
import Message from '../Message/Message';
import Button from "../Controls/Button/Button";
import {textHandler} from "../../data/Text";

class View extends React.Component {
  state = {
    type: '',
    index: 0,
    dataForCollect: {
      buttons: '',
      name: '',
    },
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
      const {messageData, chooseData, type, name} = textHandler('start', 1, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 1);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (el === 'Далее' && this.state.index === 1 && this.state.type === 'start') {
      const {messageData, chooseData, type, name} = textHandler('roommates', 1, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 1);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (el === 'Отправить' && this.state.type === 'roommates' && this.state.index === 1) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 2, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 2);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState('', name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 2) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 3, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 3);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 3) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 4, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 4);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 4) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 5, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 5);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 5) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 6, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 6);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 6) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 7, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 7);


      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 7) {
      const {messageData, chooseData, type, name} = textHandler('roommates', 8, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 8);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.type === 'roommates' && this.state.index === 8) {
      const {messageData, chooseData, type, name} = textHandler('last', 0, this.inputHandler, this.state.currentValue);
      this.updateStateHandler(type, messageData, chooseData, 8);

      this.setState({
        dataForCollect: {
          buttons: this.state.dataForCollect.buttons.concat(el),
          name,
        },
      });
      window.history.pushState({type, name}, name, `#${name}`);
    }

    if (this.state.currentValue) {
      this.setState({
        inputs: this.state.inputs.concat(this.state.currentValue),
      })
    }

    if (this.state.type === 'roommates' && this.state.index === 8) {
      const send = {
        ...JSON.parse(JSON.stringify(this.state)),
        sendDate: new Date(),
      };
      this.props.db.collection('profiles')
        .add(send)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }

    this.setState({
      questionsQuantity: this.state.questionsQuantity - 1,
      currentValue: '',
    });
  };

  render() {
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
