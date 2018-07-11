import React, { Component } from 'react';
import userPic from '../images/ic_male.png'

class SelfChatItem extends Component{
    render(){
        return(
            <div className="chat-container darker">
                <img className="right" src={userPic} alt="Avatar" width="60px" height="60px"/>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span className="time-left">11:00</span>
            </div>
        );
    }
}

export default SelfChatItem;