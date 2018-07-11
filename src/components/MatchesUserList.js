import React, { Component } from 'react';
import {connect} from 'react-redux';
import MatchesUserItem from './MatchesUserItem';
import {getMatchedUsers} from '../reduxStore/actions/userAction';

class MatchesUserList extends Component{

    componentDidMount(){
        this.props.getMatchedUsers();
    }

    chatWithUser=(user)=>{
        
    }

    render(){
        console.log("render", this.props.userData)
        return(
            <div className="container">
                <h5 className="text-center">Users you have been matched with.</h5>
                <ul className="list-group">
                {
                    this.props.userData.users &&
                    this.props.userData.users.map((item, index)=>{
                        return <MatchesUserItem key={index} user={item} />
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