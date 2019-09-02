import React from 'react';
import {shallow} from '../../enzyme';
import {matchsUsers} from './testing_data';
import ConnectedMatchesUserList, {MatchesUserList} from '../MatchesUserList';
import MatchesUserItem from '../MatchesUserItem';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();


describe("MatchesUserList tests", ()=>{
    const initialState = {userData: matchsUsers}
    let store, wrapper;
    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow(<Provider store={store}>
            <ConnectedMatchesUserList />
        </Provider> )  
    })
    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ConnectedMatchesUserList).length).toEqual(1)
     });

     it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(MatchesUserList).prop('userData')).toEqual(initialState.userData)
     });
})