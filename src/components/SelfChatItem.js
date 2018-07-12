import React from 'react';

const SelfChatItem=(props)=>{
    return(
        <div className="chat-container darker">
            <img className="right" src={props.userChat.profile} alt="Avatar" width="60px" height="60px"/>
            <p>{props.userChat.message}</p>
            <span className="time-left">{props.userChat.date}</span>
        </div>
    );
}

export default SelfChatItem;