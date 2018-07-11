import React, { Component } from 'react';
import SelfChatItem from './SelfChatItem';
import OtherUserChatItem from './OtherUserChatItem';

class ChatUser extends Component{
    render(){
        return(
            <div className="container">
                <h5 className="text-center">Chatting with: Jhon Doe</h5>
                <ul className="list-group">
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                </ul>
                <div className="row" style={{padding: '10px'}}>
                    <label>Message:</label>
                    <textarea className="form-control" rows="3" id="comment" name="text"></textarea>
                    <button type="submit" className="btn btn-primary" style={{margin: '10px 0'}}>Submit</button>
                </div>
            </div>
        );
    }
}

export default ChatUser;