import React from 'react';
import TeamCard from "./TeamCard";
export default class CreateTeam extends React.Component{
    constructor(){
        super();
        this.state= {
            teamName: "",
            teamMembers: [],
            list: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.onCheck = this.onCheck.bind(this);

    }

    componentDidMount() {
        Tracker.autorun(() => {
            var list = Meteor.users.find({});
            list = list.map((item) => {
                return item
            });
            this.setState({
                list
            });
        })
    }

    onCheck(item, checked){
    }

    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render(){

        const collectionData = this.state.list.map((item, key) =>{
                return <TeamCard onCheck={this.onCheck(item,key)} member={item} key={key}/>
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
                                <div className="block-header bg-success">
                                    <ul className="block-options">
                                        <li>
                                            <a href="/teams" >View Teams</a>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Create a Team</h3>
                                </div>
                                <div className="block-content block-content-full block-content-narrow">
                                    <form className="s-validation-register form-horizontal push-50-t push-50" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-primary">
                                                    <input placeholder="Enter your Team Name" onChange={this.handleChange} value={ this.state.teamName } id="teamName" type="text" className="form-control"/>
                                                    <label htmlFor="team_name">Team Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <div className="form-material form-material-primary">
                                                    <div className="collection col-xs-12">
                                                        <div className="row list-padding bg-success-light">
                                                            <div className="col s5 center-align">
                                                                <h5>First Name</h5>
                                                            </div>
                                                            <div className="col s5 center-align">
                                                                <h5>Last Name</h5>
                                                            </div>
                                                            <div className="col s2 pull-left">
                                                                <i className="material-icons tiny">add_circle</i>
                                                            </div>
                                                        </div>
                                                        { collectionData }
                                                    </div>
                                                    <label htmlFor="team_members">Team Members</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row-xs-12 row-sm-6 row-md-5">
                                                <div className="col">
                                                    <button className="btn btn-block btn-success" type="submit"> <i className="material-icons center-align small pull-right">done</i>Create Team</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}