import React from 'react';
import { TeamCard } from './TeamCard'


export default class Teams extends React.Component{

    render(){
        return(
            <div className={"container"}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <div className="content overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            {/* Personal Block */}
                            <div className="block block-themed animated fadeIn">
                                <div className="block-header bg-primary-light">
                                    <ul className="block-options">
                                        <li>
                                            <a href="/createTeam" >Create A Team</a>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Teams</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
                                    <h1> HELLO</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}