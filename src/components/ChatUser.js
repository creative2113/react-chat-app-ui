import React, { Component } from 'react';
import SelfChatItem from './SelfChatItem';
import OtherUserChatItem from './OtherUserChatItem';
import {connect} from 'react-redux';
import {getChats} from '../reduxStore/actions/userAction';

class ChatUser extends Component{
    componentDidMount(){
        this.props.getChats();
    }

    render(){
        return(
            <div className="container">
                <h5 className="text-center">Chatting with: Jhon Doe</h5>
                <ul className="list-group">
                {
                        this.props.userChat.chats && 
                        this.props.userChat.chats.map((item, index) => {
                            if(item.from=="Ram Charan"){
                                return <SelfChatItem key={index} userChat={item} />
                            }else{
                                return <OtherUserChatItem key={index} userChat={item}/>
                            }
                        })
                    }
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

const mapStatetoProps = (state) => ({
    userChat: state.userReducer.chats
});

const mapDispatchToProps = (dispatch) => ({
    getChats: () => dispatch(getChats())
});

export default connect(mapStatetoProps, mapDispatchToProps)(ChatUser);