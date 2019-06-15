import React from 'react';
import TeamsCards from "./TeamsCards";

export default class Teams extends React.Component{
    constructor(){
        super();
        this.state= {
            list: [],
        };

    }

    componentDidMount() {
        Tracker.autorun(() => {
            Meteor.call('findTeams',{},function(er, result){
                if(er){
                    Materialize.toast(er.reason, 2000);
                }else{
                    result = result.map((item) => {
                        return item
                    });
                    this.setState({
                        list: result
                    })
                }
            }.bind(this));
        });
    }


    render(){
        const collectionData = this.state.list.map((item, key) =>{
                return <TeamsCards name={item.name} members={item.members} key={key}/>
            }
        );
        return(
            <div className={"container"}>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <div className="content overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            {/* Personal Block */}
                            <div className="block block-themed animated fadeIn">
                                <div className="block-header bg-primary">
                                    <ul className="block-options">
                                        <li>
                                            <a href="/createTeam" >Create A Team</a>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Teams</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
                                    <div className="s-validation-register form-horizontal push-50-t push-50">
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-primary">
                                                    <div className="collection col-xs-12">
                                                        <div className="row list-padding bg-primary-light">
                                                            <div className="col s5 center-align">
                                                                <h5>Team Name</h5>
                                                            </div>
                                                            <div className="col s7 center-align">
                                                                <h5>Members</h5>
                                                            </div>
                                                        </div>
                                                        { collectionData }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}