import React, { Component } from 'react';

const MatchesUserItem=(props)=>{
    const renderStatus=(status)=>{
        if(status=="Online"){
            return <label style={{color: 'blue'}}>{status}</label>
        }else{
            return <label style={{color: 'grey'}}>{status}</label>
        }
    }

    return (
        <div className="card list-group-item" style={{ height: '80px', margin: '5px' }}>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img className="img-user-profile" src={props.user.profile} alt="User Image" width="60px" height="60px"/>
                    <div style={{marginLeft: '10px'}}>
                        <label>{props.user.name}, {props.user.age}y</label><br />
                        <label>{props.user.location}</label>
                    </div>
                </div>
                {
                    renderStatus(props.user.status)
                }
            </div>
        </div>
    );
}

export default MatchesUserItem;