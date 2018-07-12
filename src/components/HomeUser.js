import React from 'react';

const HomeUser=(props)=>{
    return (
        <div className="home-user">
            <img className="img-user" src={props.user.profile} alt="User"/>
            <div className="home-name-label">
                <label>{props.user.name}, {props.user.age}y</label><br/>
                <label>{props.user.location}</label>
            </div>
        </div>
    );
}

export default HomeUser;