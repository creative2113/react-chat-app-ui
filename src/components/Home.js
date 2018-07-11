import React, { Component } from 'react';
import HomeUserCard from './HomeUserCard';
import { connect } from 'react-redux';
import { getAllUsers } from '../reduxStore/actions/userAction';


class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="flex-row row">
                    {
                        this.props.userData.users && 
                        this.props.userData.users.map((item, index) => {
                            return <HomeUserCard key={index} user={item} />
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getAllUsers();
    }
}

const mapStatetoProps = (state) => ({
    userData: state.userReducer.users
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

