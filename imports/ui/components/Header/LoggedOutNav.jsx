import React from 'react';

export default class LoggedOutNav extends React.Component{

    render(){
        return(
            <ul id="nav-mobile" className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        )
    }
}