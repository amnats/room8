import React, {useState} from 'react';
import './Message.css';

function Message({type, value, inputHandler, index, children}) {
  let input = '';
  if (type === 'text_input') {
    input = <input onChange={inputHandler} value={value} type="text"/>;
  }

  return (
    <div className="Message">
      <div className="MessageText">
        {children}
        {input}
      </div>
    </div>
  );
}

export default Message;
