import React from 'react';
import './Message.css';

function Message({type, value, inputHandler, index, children}) {

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
              {children}
              {input}
          </div>
      </div>
  );
}

export default Message;
