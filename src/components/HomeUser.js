import React, { Component } from 'react';
import pic1 from '../images/pic1.jpg'

class HomeUser extends Component {
    render() {
        return (
            <div className="home-user">
                <img className="img-user" src={pic1} alt="User Image"/>
                <div className="home-name-label">
                    <label>User Name, Age</label><br/>
                    <label>Location</label>
                </div>
            </div>
        );
    }
}

export default HomeUser;