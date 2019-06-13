import React from 'react';
import { User } from '../Models/user'
import { Meteor } from 'meteor/meteor'
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

let navStyle = {
    backgroundColor: "#3169b1",
    paddingLeft: "18px",
    paddingRight: "18px"
};


export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: User.isLoggedIn()
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
        let navOptions = User.isLoggedIn() ? <LoggedInNav/>: <LoggedOutNav/>;
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
