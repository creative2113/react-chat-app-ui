import React, { Component } from 'react';
import HomeUser from './HomeUser';
import HomeAction from './HomeAction';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="card" style={{ width: '400px', height: '400px' }}>
                    <HomeUser />
                    <HomeAction />
                </div>
            </div>
        );
    }
}

export default Home;

