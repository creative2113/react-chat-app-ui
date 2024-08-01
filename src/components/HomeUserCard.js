import React from 'react';
import HomeUser from './HomeUser';
import HomeAction from './HomeAction';

const HomeUserCard = (props) => {
    return (
        <div className="home-user-card card col-xs-6 col-sm-4 col-lg-3">
            <HomeUser user={props.user}/>
            <HomeAction likeUser={props.likeUser} dislikeUser={props.dislikeUser} user={props.user}/>
        </div>
    );
}

export default HomeUserCard;