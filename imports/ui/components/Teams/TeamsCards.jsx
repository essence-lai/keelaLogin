import React from 'react';


export default class TeamsCards extends React.Component{
    constructor(){
        super();
        this.state={
            members: []
        };
    }


    render(){
        const members = this.props.members.map((item, key) =>{
                let name = Meteor.users.findOne({_id: item});
                return <h6 key={key}>{ name.profile.firstName  + " " + name.profile.lastName}</h6>
            }
        );
        return(
            <div className="teams-card-padding bg-primary-lighter" key={this.key}>
                <div className="row ">
                    <div className="col s5 center-align ">
                        <h6>{this.props.name}</h6>
                    </div>
                    <div className="col s7 center-align">
                        { members}
                    </div>
                </div>
            </div>
        )
    }
}
