import React from 'react';

const MatchesUserItem=(props)=>{
    const renderStatus=(status)=>{
        if(status==="Online"){
            return <label style={{color: 'blue'}}>{status}</label>
        }else{
            return <label style={{color: 'grey'}}>{status}</label>
        }
    }

    const clickToChat=()=>{
        props.chatWithUser(props.user);
    }

    return (
        <div onClick={clickToChat} className="maches-user-item card list-group-item">
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