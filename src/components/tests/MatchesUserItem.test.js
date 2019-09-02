import React from 'react';
import {shallow} from '../../enzyme';
import MatchesUserItem from '../MatchesUserItem';
import {matchsUsers} from './testing_data';

describe("MatchesUserItem tests", ()=>{
    it("render users", ()=>{
        const user=matchsUsers.users[0];
        const wrapper=shallow(<MatchesUserItem user={user} />);
        expect(wrapper.find(".maches-user-item")).toBeDefined();
        expect(wrapper.find(".img-user-profile")).toBeDefined();
    });
    it("render user details", ()=>{
        const user=matchsUsers.users[0];
        const wrapper=shallow(<MatchesUserItem user={user} />);
        expect(wrapper.contains(<div className="d-flex">
        <img className="img-user-profile" src={user.profile} alt="User Image" width="60px" height="60px"/>
        <div style={{marginLeft: '10px'}}>
            <label>y</label><br />
            <label>{user.location}</label>
        </div>
    </div>));
    });
    
})