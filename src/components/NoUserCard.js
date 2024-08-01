import React from 'react';
import placeholder from '../images/placeholder.png'

const NoUserCard=()=>{
    return (
        <div className="home-no-user card">
            <img className="img-user" src={placeholder} alt="User"/>
            <div className="card-body">
                <strong>Refresh to load users.</strong>
            </div>
        </div>
    );
}

export default NoUserCard;