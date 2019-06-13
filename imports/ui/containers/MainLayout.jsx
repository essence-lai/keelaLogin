import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home.jsx';
import Register from '../components/User/Register'
import Login from '../components/User/Login'
import Personal from '../components/User/Personal'
import Logout from '../components/Logout/Logout'
import NotFound from '../pages/NotFound.jsx';
import { User } from '../components/Models/user'

export default class MainLayout extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/'
                               render={() => {
                                   if(User.isLoggedIn()){
                                       return  <Redirect push to ="/personal"/>;
                                   }else {
                                       return <Home/>;
                                   }
                               }}
                        />
                        <Route exact path='/register'
                               render={() => {
                                   if(User.isLoggedIn()){
                                       return  <Redirect push to="/personal"/>;
                                   }else {
                                       return <Register/>;
                                   }
                               }}
                        />
                        <Route exact path='/login'
                               render={() => {
                                   if(User.isLoggedIn()){
                                       return  <Redirect push to="/personal"/>;
                                   }else {
                                       return <Login/>;
                                   }
                               }}
                         />
                        <Route exact path='/logout'
                               render={() => {
                                   if(User.isLoggedIn()){
                                       return  <Logout/>;
                                   }else {
                                       return <Redirect push to="/"/>
                                   }
                               }}
                        />
                        <Route exact path='/personal'
                               render={() => {
                                   if(User.isLoggedIn()){
                                       return  <Personal/>;
                                   }else {
                                       return <Redirect push to="/"/>;
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
