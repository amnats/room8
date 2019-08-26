import React from 'react';
import './View.css';
import Message from '../Message/Message';
import Button from "../Controls/Button/Button";
import {textHandler, blocks} from "../../data/Text";

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
    // window.history.pushState({type, name}, name, `#${name}`);
    // this.updateStateHandler(type, messageData, chooseData, 1);
    // this.setState({
    //   dataForCollect: {
    //     buttons: this.state.dataForCollect.buttons.concat(el),
    //     name,
    //   },
    // });

    // if (this.state.currentValue) {
    //   this.setState({
    //     inputs: this.state.inputs.concat(this.state.currentValue),
    //   })
    // }
  };

  sendData() {
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

  render() {
    const {messageData, chooseData, index} = this.state;
    const currBlock = blocks[index];

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
          inputHandler={this.inputHandler}>{messageData}
        </Message>
        {buttons}
      </div>
    );
  }
}

export default View;
