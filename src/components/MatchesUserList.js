import React, { Component } from 'react';
import {connect} from 'react-redux';
import MatchesUserItem from './MatchesUserItem';
import {getMatchedUsers} from '../reduxStore/actions/userAction';
import {Redirect} from 'react-router-dom';

export class MatchesUserList extends Component{
    constructor(props){
        super(props);
        this.state={
            isChatClicked: false
        }
    }
    componentDidMount(){
        this.props.getMatchedUsers();
    }

    chatWithUser=(user)=>{
        this.setState({isChatClicked: true});
    }

    render(){
        if(this.state.isChatClicked){
            return <Redirect to="/chat" />
        }
        return(
            <div className="container">
                <h5 className="text-center">Users you have been matched with.</h5>
                <ul className="list-group">
                {
                    this.props.userData.users &&
                    this.props.userData.users.map((item, index)=>{
                        return <MatchesUserItem chatWithUser={this.chatWithUser} key={index} user={item} />
                    })
                }
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    userData: state.userReducer.matchedUsers
})

const mapDispatchToProps=(dispatch)=>({
    getMatchedUsers: ()=> dispatch(getMatchedUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(MatchesUserList);