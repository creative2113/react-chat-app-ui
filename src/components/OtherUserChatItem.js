import React, { Component } from 'react';
import userPic from '../images/ic_female.png'

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