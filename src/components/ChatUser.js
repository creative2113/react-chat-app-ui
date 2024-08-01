import React, { Component } from 'react';
import SelfChatItem from './SelfChatItem';
import OtherUserChatItem from './OtherUserChatItem';
import {connect} from 'react-redux';
import {getChats, updateChat} from '../reduxStore/actions/userAction';

class ChatUser extends Component{
    constructor(props){
        super(props);
        this.state={
            message: ""
        }
    }
    componentDidMount(){
        this.props.getChats();
    }

    handleMessageChange=(e)=>{
        this.setState({message: e.target.value})
    }

    postChatData=(e)=>{
        e.preventDefault();
        let chat={
            id: Math.floor((Math.random() * 10000) + 1),
            from: "Ram Charan",
            to: "Mahesh",
            profile: "https://image.ibb.co/eh5PsT/download_2.jpg",
            message: this.state.message,
            date: new Date().toLocaleString()
        };
        let chats=this.props.userChat.chats;
        chats.push(chat);
        let userChats={
            chats: chats
        }
        this.props.updateChat(userChats)
        this.setState({message: ""})
        
    }

    render(){
        return(
            <div className="container">
                <h5 className="text-center">Chatting with: Jhon Doe</h5>
                <ul className="list-group">
                {
                        this.props.userChat.chats && 
                        this.props.userChat.chats.map((item, index) => {
                            if(item.from==="Ram Charan"){
                                return <SelfChatItem key={index} userChat={item} />
                            }else{
                                return <OtherUserChatItem key={index} userChat={item}/>
                            }
                        })
                    }
                </ul>
                <div className="row" style={{padding: '10px'}}>
                    <label>Message:</label>
                    <textarea value={this.state.message} onChange={this.handleMessageChange} className="form-control" rows="3" id="comment" name="text"></textarea>
                    <button onClick={this.postChatData} type="submit" className="btn btn-primary" style={{margin: '10px 0'}}>Submit</button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    userChat: state.userReducer.chats
});

const mapDispatchToProps = (dispatch) => ({
    getChats: () => dispatch(getChats()),
    updateChat: (userChats)=> dispatch(updateChat(userChats))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ChatUser);