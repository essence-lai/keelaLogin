import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import * as User from '../Models/user'
import { Meteor } from 'meteor/meteor'

let navStyle = {
    backgroundColor: "#3169b1",
    paddingLeft: "18px",
    paddingRight: "18px"
};

let navOptions;


export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: User.User.isLoggedIn()
        };
        this.logOut = this.logOut.bind(this);

    }


    logOut(e){
        e.preventDefault();
        Meteor.logout(function(er){
            if(er){
                Materialize.toast(er.reason, 20);
            }else{
                this.setState({isLoggedIn: !this.state.isLoggedIn},
                    () => {this.props.history.push('home')}
                );

            }
        }.bind(this));
    }

    render() {
        if (User.User.isLoggedIn()){
            navOptions =(
                <ul id="nav-mobile" className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            );
        }else{
            navOptions =(
                <ul id="nav-mobile" className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            );
        }
        return (
            <nav style={navStyle}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Keela Teams</a>
                    {navOptions}
                </div>
            </nav>
        );
    }
}
