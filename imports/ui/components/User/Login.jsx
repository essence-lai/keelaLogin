import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {User} from "../Models/user";

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            loggedIn: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onOAuth = this.onOAuth.bind(this);
    }

    onOAuth(e){
        e.preventDefault();
        Meteor.loginWithGoogle(function(er){
            if(er) {
                Materialize.toast(er.message, 2000);
            } else{
                let firstName = User.profile().firstName|| User.firstName()||"";
                let lastName = User.profile().lastName|| User.lastName()||"";
                let email = User.profile().email|| User.email()||"";

                Meteor.users.update({_id: Meteor.userId()},{
                    $set:{
                        'profile.email': email,
                        'profile.firstName': firstName,
                        'profile.lastName': lastName
                    }
                });
                this.setState({
                    loggedIn: true
                })
            }
        }.bind(this))
    }

    onSubmit(e){
        e.preventDefault();
        let form = $(e.target);

        let username = form.find("#login-username").val();
        let password = form.find("#login-password").val();
        {/*TODO: develop a remember Me function*/}
        // let rememberMe = form.find("#login-remember-me").is(':checked');

        //Login with Password
        Meteor.loginWithPassword( username, password, function(er){
            if(er) {
                Materialize.toast(er.reason, 2000);
            } else{
                this.setState({
                    loggedIn: true
                })
            }
        }.bind(this))
    }
    render(){
        return(
            <Route path="/login" render={() => (
                this.state.loggedIn? (
                    <Redirect exact push to="/personal"/>
                ):(
                    <div className={"container"}>
                        {/*[if IE 9]>         <html class="ie9 no-focus"> <![endif]*/}
                        {/*[if gt IE 9]><!*/}  {/*<![endif]*/}
                        {/*<meta charSet="utf-8" />

                <title>OneUI - Admin Dashboard Template &amp; UI Framework</title>

                <meta name="description" content="OneUI - Admin Dashboard Template & UI Framework created by pixelcave and published on Themeforest" />
                <meta name="author" content="pixelcave" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0" />

                <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700"/>
*/}
                        {/* Stylesheets */}


                        {/* You can include a specific file from css/themes/ folder to alter the default color theme of the template. eg: */}
                        {/* <link rel="stylesheet" id="css-theme" href="assets/css/themes/flat.min.css"> */}
                        {/* END Stylesheets */}
                        {/* Bootstrap and OneUI CSS framework */}
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        {/* Login Content */}
                        <div className="content overflow-hidden">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                                    {/* Login Block */}
                                    <div className="block block-themed animated fadeIn">
                                        <div className="block-header bg-primary">
                                            <ul className="block-options">
                                                <li>
                                                    <a href="/register">Register User?</a>
                                                </li>
                                                <li>
                                                    <a href="/register" data-toggle="tooltip" data-placement="left" title="New Account"><i className="material-icons tiny">add</i></a>
                                                </li>
                                            </ul>
                                            <h3 className="block-title">Login</h3>
                                        </div>
                                        <div className="block-content block-content-full block-content-narrow">
                                            {/* Login Title */}
                                            <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                                            <p>Welcome, please login.</p>
                                            {/* END Login Title */}
                                            {/* Login Form */}
                                            {/* jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) */}
                                            {/* For more examples you can check out https://github.com/jzaefferer/jquery-validation */}
                                            <form className="js-validation-register form-horizontal push-30-t push-50" onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-primary">
                                                            <input className="form-control" type="text" id="login-username" name="login-username" />
                                                            <label htmlFor="login-username">Username</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-primary">
                                                            <input className="form-control" type="password" id="login-password" name="login-password" />
                                                            <label htmlFor="login-password">Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TODO create remember me funcitonality*/}
                                                {/*<div className="form-group">*/}
                                                    {/*<div className="col-xs-12">*/}
                                                        {/*<label className="css-input switch switch-sm switch-primary">*/}
                                                            {/*<input type="checkbox" id="login-remember-me" name="login-remember-me" /><span /> Remember Me?*/}
                                                        {/*</label>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                                <div className="form-group">
                                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                                        <button className="btn btn-block btn-primary left-align" type="submit">
                                                            <i className="material-icons pull-right">launch</i>Log in</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="center-align">
                                                <div className="col-xs-12 col-sm-6 col-md-4">
                                                    <button className="btn btn-block btn-secondary" onClick={this.onOAuth}>Log in with Google </button>
                                                </div>
                                            </div>
                                            {/* END Login Form */}
                                        </div>
                                    </div>
                                    {/* END Login Block */}
                                </div>
                            </div>
                        </div>
                        {/* END Login Content */}

                        {/* Login Footer */}
                        <div className="push-10-t text-center animated fadeInUp">
                            <small className="text-muted font-w600"><span className="js-year-copy" /> © OneUI 1.3</small>
                        </div>
                        {/* END Login Footer */}


                    </div>
                )
            )}/>
        )
    }
}
