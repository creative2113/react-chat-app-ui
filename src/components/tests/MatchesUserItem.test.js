import React from 'react';
import {shallow} from '../../enzyme';
import MatchesUserItem from '../MatchesUserItem';
import {matchsUsers} from './testing_data';

describe("MatchesUserItem tests", ()=>{
    it("render users", ()=>{
        const users=matchsUsers.users;
        const wrapper=shallow(<MatchesUserItem user={users[0]} />);
        expect(wrapper.find(".maches-user-item")).toBeDefined();
        expect(wrapper.find(".img-user-profile")).toBeDefined();
    })
})