import React from 'react';

export default class TeamCard extends React.Component{
    constructor(){
        super();
        this.state={
            checked: false
        };
        this.onCheck = this.onCheck.bind(this);
    }


    onCheck(){
        this.setState({
          checked: this.props.onCheck(this.state.checked, this.props.member)
        })

    }
    render(){
        return(
            <div className="container team-card-padding" key={this.key}>
                <div className="row ">
                    <div className="col s5 ">
                        <h6>{this.props.member.profile.firstName}</h6>
                    </div>
                    <div className="col s5 ">
                        <h6>{this.props.member.profile.lastName}</h6>
                    </div>
                    <div className="col s2 pull-right">
                        <input type="checkbox" id={this.props.member._id}
                               onClick={this.onCheck} />
                        {
                            this.state.checked?
                                <label htmlFor={this.props.member._id}>remove</label>
                            :
                                <label htmlFor={this.props.member._id}>add</label>

                        }
                    </div>
                </div>
            </div>
        )
    }

}
