import React, { Component } from 'react';
import userPic from '../images/ic_female.png'

class MatchesUserItem extends Component {
    render() {
        return (
            <div class="card list-group-item" style={{ height: '80px', margin: '5px' }}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img className="img-user-profile" src={userPic} alt="User Image" width="60px" height="60px"/>
                        <div style={{marginLeft: '10px'}}>
                            <label>User Name, Age</label><br />
                            <label>Location</label>
                        </div>
                    </div>
                    <label>Status</label>
                </div>
            </div>
        );
    }
}

export default MatchesUserItem;