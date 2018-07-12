import React, { Component } from 'react';
import HomeUserCard from './HomeUserCard';
import { connect } from 'react-redux';
import { getAllUsers, likeUser, dislikeUser } from '../reduxStore/actions/userAction';
import NoUserCard from './NoUserCard';

class Home extends Component {

    render() {
        let isNoUser=this.props.userData.users && this.props.userData.users.length == 0;
        return (
            <div className="container">
                <div className="flex-row row justify-content-center">
                    {
                        this.props.userData.users && 
                        this.props.userData.users.map((item, index) => {
                            return <HomeUserCard likeUser={this.likeUser} dislikeUser={this.dislikeUser} key={index} user={item} />
                        })
                    }
                    {
                        isNoUser && <NoUserCard />
                    }
                </div>
            </div>
        );
    }

    likeUser=(user)=>{
        this.props.userData.users.splice(this.props.userData.users.indexOf(user), 1);
        let userData={
            users: this.props.userData.users
        };
        this.props.likeUser(userData);
    }

    dislikeUser=(user)=>{
        this.props.userData.users.splice(this.props.userData.users.indexOf(user), 1);
        let userData={
            users: this.props.userData.users
        };
        this.props.likeUser(userData);
    }

    componentDidMount() {
        this.props.getAllUsers();
    }
}

const mapStatetoProps = (state) => ({
    userData: state.userReducer.users
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers()),
    likeUser: (users)=> dispatch(likeUser(users)),
    dislikeUser: (users)=> dispatch(dislikeUser(users))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

