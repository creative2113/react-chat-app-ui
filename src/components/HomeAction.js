import React, { Component } from 'react';
import ic_like from '../images/ic_like.png';
import ic_dislike from '../images/ic_dislike.png';

const HomeAction=(props)=>{
    return (
        <div className="d-flex justify-content-around" style={{marginTop: '20px'}}>
            <div>
                <div><img className="img-bg-black" src={ic_dislike} /></div>
                <label>Dislike</label>
            </div>
            <div>
                <div><img className="img-bg-black" src={ic_like} /></div>
                <label>Like</label>
            </div>
        </div>
    );
}

export default HomeAction;