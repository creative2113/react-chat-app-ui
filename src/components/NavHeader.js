import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid d-flex justify-content-start">
                <div className="navbar-header"><a className="navbar-brand" href="#">Tinder</a></div>
                <div className="link-home"><NavLink activeClassName="link-home-active" to="/">Home</NavLink></div>
                <div className="link-home"><NavLink activeClassName="link-home-active" to="/users">Your Matches</NavLink></div>
                <div className="link-home"><NavLink activeClassName="link-home-active" to="/chat">Chat</NavLink></div>
            </div>
        </nav>
    );
}

export default NavHeader;