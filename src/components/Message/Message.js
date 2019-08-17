import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <div className="MessageText">
                {props.children}
            </div>
        </div>
    );
}

export default Message;
