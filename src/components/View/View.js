import React from 'react';
import './View.css';
import Message from '../Message/Message';
import Button from "../Controls/Button/Button";
import {blocks} from "../../data/Text";

class View extends React.Component {
  state = {
    type: '',
    index: 0,
    block: {},
    dataForCollect: {
      buttons: '',
      name: '',
    },
    chooseData: [],
    messageData: '',
    questionsQuantity: 10,
    inputs: [],
    currentValue: '',
    form: {}
  };

  updateStateHandler = (type, messageData, chooseData, index, questionsQuantity) => {
    questionsQuantity = questionsQuantity || this.state.questionsQuantity;
    const block = blocks[index];
    this.setState({
      type,
      messageData,
      chooseData,
      index,
      block,
      questionsQuantity
    });
  };

  inputHandler = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [this.state.block.name]: e.target.value
      }
    })
  }

  componentDidMount() {
    const {messageData, chooseData, type} = blocks[0];
    this.updateStateHandler(type, messageData, chooseData, 0);

    window.onpopstate = ({state}) => {
      if (state) {
        const {index} = state;
        const {type, messageData, chooseData} = blocks[index];
        this.updateStateHandler(type, messageData, chooseData, index, this.state.questionsQuantity + 1);
      } else {
        this.updateStateHandler(type, messageData, chooseData, 0, this.state.questionsQuantity + 1);
      }
    };
  }

  nextHandler = (childEl) => {
    const {index} = this.state;
    const newIndex = index + 1;
    const block = blocks[newIndex];
    const {type, messageData, chooseData, name} = block;

    this.setState({
      dataForCollect: {
        buttons: this.state.dataForCollect.buttons.concat(childEl),
        name
      },
    });

    this.updateStateHandler(type, messageData, chooseData, newIndex, this.state.questionsQuantity - 1);
    window.history.pushState({index: newIndex}, name, `#${name}`);

    if (newIndex === blocks.length - 1) {
      this.sendData();
    }
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
      buttonsInChooseData = chooseData.map((el, elIndex) => {
        return <Button key={elIndex} onClick={() => this.nextHandler(el)} text={el} />
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
          inputHandler={this.inputHandler}
          value={this.state.form[currBlock.name] || ''}
        >
          {messageData}
        </Message>
        {buttons}
      </div>
    );
  }
}

export default View;
