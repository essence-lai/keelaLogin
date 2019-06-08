import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home.jsx';
import Register from '../components/User/Register'
import Login from '../components/User/Login'
import Logout from '../components/Logout/Logout'
import NotFound from '../pages/NotFound.jsx';
import * as User from '../components/Models/user'

export default class MainLayout extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/'
                               render={() => {
                                   if(User.User.isLoggedIn()){
                                       return  <Home/>;
                                   }else {
                                       return <Redirect push to="/register"/>;
                                   }
                               }}
                        />
                        <Route exact path='/register'
                               render={() => {
                                   if(User.User.isLoggedIn()){
                                       return  <Redirect push to="/"/>;
                                   }else {
                                       return <Register/>;
                                   }
                               }}
                        />
                        <Route exact path='/login'
                               render={() => {
                                   if(User.User.isLoggedIn()){
                                       return  <Redirect push to="/"/>;
                                   }else {
                                       return <Login/>;
                                   }
                               }}
                         />
                        <Route exact path='/logout'
                               render={() => {
                                   if(User.User.isLoggedIn()){
                                       return  <Logout/>;
                                   }else {
                                       return <Redirect push to='/'/>
                                   }
                               }}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
