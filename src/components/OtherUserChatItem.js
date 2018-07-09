import React, { Component } from 'react';
import userPic from '../images/ic_female.png'

class OtherUserChatItem extends Component{
    render(){
        return(
            <div className="chat-container">
                <img src={userPic} alt="Avatar" width="60px" height="60px"/>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
        );
    }
}

export default OtherUserChatItem;