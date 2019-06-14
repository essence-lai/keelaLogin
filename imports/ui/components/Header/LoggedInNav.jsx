import React from 'react';


export default class LoggedInNav extends React.Component{

    render(){
        return(
            <ul id="nav-mobile" className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/teams"> Teams</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        )
    }
}