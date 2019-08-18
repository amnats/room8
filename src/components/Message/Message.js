import React from 'react';
import './Message.css';

function Message(props) {
  const {type, value, inputHandler, index} = props;

  let input = '';

  if ((type === 'start' && index === 1)
    || (type === 'roommates' && index === 1)
    || (type === 'roommates' && index === 7)
    || (type === 'roommates' && index === 8)
  ) {
    input = <input onChange={inputHandler} value={value} type="text"/>;
  }

    return (
        <div className="Message">
            <div className="MessageText">
                {props.children}
                {input}
            </div>
        </div>
    );
}

export default Message;
