import React from 'react';
import './View.css';
import Message from '../Message/Message';
import Button from "../Controls/Button/Button";
import {text} from '../../data/Text';

class View extends React.Component {
  state = {
    messageData: text[0].messageData,
    chooseData: text[0].chooseData,
    type: text[0].type,
    index: 0,
  };

  nextHandler = () => {
    const newIndex = this.state.index + 1;

    this.setState({
      messageData: text[newIndex].messageData,
      chooseData: text[newIndex].chooseData,
      type: text[newIndex].type,
    });
  };

  render() {
    const {messageData, chooseData, type} = this.state;
    let buttonsInChooseData = [];

    if (chooseData.length) {
      buttonsInChooseData = chooseData.map(el => {
        return <Button onClick={this.nextHandler} text={el} />
      });
    }

    return (
      <div className="View">
        <Message>{messageData}</Message>
        {type === 'chooseFlow' && <div className="ButtonsWrapper">{buttonsInChooseData}</div>}
        {type === 'start' && <Button onClick={this.nextHandler} text="Далее"/>}
      </div>
    );
  }
}

export default View;
