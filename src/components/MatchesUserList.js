import React, { Component } from 'react';
import MatchesUserItem from './MatchesUserItem';

class MatchesUserList extends Component{
    render(){
        return(
            <div class="container">
                <h5 className="text-center">Users you have been matched with.</h5>
                <ul class="list-group">
                    <MatchesUserItem/>
                    <MatchesUserItem/>
                    <MatchesUserItem/>
                    <MatchesUserItem/>
                    <MatchesUserItem/>
                </ul>
            </div>
        );
    }
}
export default MatchesUserList;