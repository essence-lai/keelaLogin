import React from 'react';
import * as User from "../Models/user";
import { Meteor } from 'meteor/meteor';
import { Redirect, Route } from 'react-router-dom';



export default class Logout extends React.Component{
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
                this.setState({
                    isLoggedIn: !this.state.isLoggedIn}
                );

            }
        }.bind(this));
    }

    render(){
        return(
            <Route path="/logout" render={() => (
                this.state.isLoggedIn? (
                    <Redirect exact push to="/"/>
                ):(
                <div className="container">
                    <div  className="content">
                        <div className="block block-themed block-transparent remove-margin-b">
                            <div className="block-header bg-primary-dark">
                                <h3 className="block-title">LOGOUT</h3>
                            </div>
                            <div className="block-content center-align">
                                <p> Are you sure? </p>
                            </div>
                        </div>
                        <div className="center-align">
                            <a className="btn btn-sm btn-default waves-effect waves-light logout-footer" href={'/'}>Back to Home</a>
                            <a className="btn btn-sm btn-primary waves-effect waves-light logout-footer" onClick={this.logOut}>Yes</a>
                        </div>
                    </div>
                </div>
                    )
            )}
               />
        )
    }
}