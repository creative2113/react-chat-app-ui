import React from 'react';

const OtherUserChatItem=(props)=>{
    return(
        <div className="chat-container">
            <img src={props.userChat.profile} alt="Avatar" width="60px" height="60px"/>
            <p>{props.userChat.message}</p>
            <span className="time-right">{props.userChat.date}</span>
        </div>
    );
}
export default OtherUserChatItem;