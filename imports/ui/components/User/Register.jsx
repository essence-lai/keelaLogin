import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { User } from "../Models/user";

export default class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            loggedIn: false,
            showModal: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let form = $(e.target);

        let username = form.find("#register-username").val();
        let email = form.find("#register-email").val();
        let password = form.find("#register-password").val();
        let password2 = form.find("#register-password2").val();
        let terms = form.find("#register-terms").is(':checked');


        {/*TODO improve password protection*/}
        if (!terms){
            Materialize.toast("Please accept the terms and conditions", 2000);
        }else if(password === password2 && password !== "" && password2 !==""){
            let userInfo = {
                username: username,
                email: email,
                password: password
            };

            Accounts.createUser(userInfo, function(er){
                if(er){
                    Materialize.toast(er.reason, 2000);
                } else{
                    let email = User.emails() || "";
                    Meteor.users.update({_id: Meteor.userId()},{
                        $set:{
                            'profile.email': email
                        }
                    });
                    this.setState({
                        loggedIn: true
                    })
                }
            }.bind(this))

        }else{
            Materialize.toast("Password do not match!", 2000);
        }
    }


    render(){

        return(
            <Route exact path="/register" render={() => (
                this.state.loggedIn? (
                    <Redirect push to="/"/>
                ) : (
                    <div className={"container"}>
                        {/*[if IE 9]>         <html class="ie9 no-focus"> <![endif]*/}
                        {/*[if gt IE 9]><!*/}  {/*<![endif]*/}
                        {/*<meta charSet="utf-8" />
*/}
                        {/* <title>OneUI - Admin Dashboard Template &amp; UI Framework</title>

            <meta name="description" content="OneUI - Admin Dashboard Template & UI Framework created by pixelcave and published on Themeforest" />
            <meta name="author" content="pixelcave" />
            <meta name="robots" content="noindex, nofollow" />
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0" />
*/}
                        {/* Stylesheets */}
                        {/* Web fonts */}
                        {/*
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700" />
*/}

                        {/* You can include a specific file from css/themes/ folder to alter the default color theme of the template. eg: */}
                        {/* <link rel="stylesheet" id="css-theme" href="assets/css/themes/flat.min.css"> */}
                        {/* END Stylesheets */}
                        {/* Register Content */}
                        {/* Bootstrap and OneUI CSS framework */}
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        <div className="content overflow-hidden">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                                    {/* Register Block */}
                                    <div className="block block-themed animated fadeIn">
                                        <div className="block-header bg-success">
                                            <ul className="block-options">
                                                <li>
                                                    <button className="waves-effect waves-light" onClick={this.toggleModal}>View Terms</button>
                                                </li>
                                                <li>
                                                    <a href="/login" data-toggle="tooltip" data-placement="left" title="Log In"><i className="material-icons tiny">launch</i></a>
                                                </li>
                                            </ul>
                                            <h3 className="block-title">Register</h3>
                                        </div>
                                        <div className="block-content block-content-full block-content-narrow">
                                            {/* Register Title */}
                                            <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                                            <p>Please fill the following details to create a new account.</p>
                                            {/* END Register Title */}
                                            {/* Register Form */}
                                            {/* jQuery Validation (.js-validation-register class is initialized in js/pages/base_pages_register.js) */}
                                            {/* For more examples you can check out https://github.com/jzaefferer/jquery-validation */}
                                            <form className="js-validation-register form-horizontal push-50-t push-50" onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-success">
                                                            <input  className="form-control" type="text" id="register-username" name="register-username" placeholder="Please enter a username" />
                                                            <label htmlFor="register-username">Username</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-success">
                                                            <input className="form-control" type="email" id="register-email" name="register-email" placeholder="Please provide your email" />
                                                            <label htmlFor="register-email">Email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-success">
                                                            <input className="form-control" type="password" id="register-password" name="register-password" placeholder="Choose a strong password.." />
                                                            <label htmlFor="register-password">Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <div className="form-material form-material-success">
                                                            <input className="form-control" type="password" id="register-password2" name="register-password2" placeholder="..and confirm it" />
                                                            <label htmlFor="register-password2">Confirm Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12">
                                                        <label className="css-input switch switch-sm switch-success">
                                                            <input type="checkbox" id="register-terms" name="register-terms" /><span /> I agree with terms &amp; conditions
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-xs-12 col-sm-6 col-md-5">
                                                        <button className="btn btn-block btn-success" type="submit"> <i className="material-icons center-align small pull-right">add</i>Sign Up</button>
                                                    </div>
                                                </div>
                                            </form>
                                            {/* END Register Form */}
                                        </div>
                                    </div>
                                    {/* END Register Block */}
                                </div>
                            </div>
                        </div>
                        {/* END Register Content */}

                        {/* Register Footer */}
                        <div className="push-10-t text-center animated fadeInUp">
                            <small className="text-muted font-w600"><span className="js-year-copy" /> © OneUI 1.3</small>
                        </div>
                        {/* END Register Footer */}
                        {/* Terms Modal */}
                        <div  className="modal" id="modal-terms" >
                            <div className="modal-dialog modal-dialog-popout">
                                <div className="modal-content">
                                    <div className="block block-themed block-transparent remove-margin-b">
                                        <div className="block-header bg-primary-dark">
                                            <ul className="block-options">
                                                <li>
                                                    <button data-dismiss="modal" type="button"><i className="si si-close" /></button>
                                                </li>
                                            </ul>
                                            <h3 className="block-title">Terms &amp; Conditions</h3>
                                        </div>
                                        <div className="block-content">
                                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                            <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-sm btn-default" type="button" data-dismiss="modal">Close</button>
                                        <button className="btn btn-sm btn-primary" type="button" data-dismiss="modal"><i className="material-icons">check</i> I agree</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END Terms Modal */}
                    </div>
                )
            )}/>

        );
        }




}