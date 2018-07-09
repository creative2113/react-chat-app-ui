import React, { Component } from 'react';
import SelfChatItem from './SelfChatItem';
import OtherUserChatItem from './OtherUserChatItem';

class ChatUser extends Component{
    render(){
        return(
            <div className="container">
                <h5 className="text-center">Chatting with: User Name</h5>
                <ul class="list-group">
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                    <OtherUserChatItem/>
                    <SelfChatItem/>
                </ul>
                <div className="row" style={{padding: '10px'}}>
                    <label for="comment">Message:</label>
                    <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
                    <button type="submit" class="btn btn-primary" style={{margin: '10px 0'}}>Submit</button>
                </div>
            </div>
        );
    }
}

export default ChatUser;