import React from 'react';
import TeamsCards from "../Teams/TeamsCards";


export default class Personal extends React.Component{
    constructor(){
        super();
        this.state={
            editable: false,
            email: "",
            firstName: "",
            lastName: "",
            teams: []
        };

        this.onEdit = this.onEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        Tracker.autorun(() => {
            if(Meteor.user()){
                let email = Meteor.user().profile.email || "";
                let firstName = Meteor.user().profile.firstName || "";
                let lastName = Meteor.user().profile.lastName || "";

                this.setState({
                    email,
                    firstName,
                    lastName
                });

                Meteor.call('findTeams',{"members": Meteor.user()._id},function(er, result){
                    if(er){
                        Materialize.toast(er.reason, 2000);
                    }else{
                        console.log(result);
                        result = result.map((item) => {
                            return item
                        });
                        this.setState({
                            teams: result
                        })
                    }
                }.bind(this));
            }

        })
    }

    handleChange(e){
       this.setState({
         [e.target.id] : e.target.value
       })
    }


    onEdit(){
        let email = Meteor.user().profile.email || "";
        let firstName = Meteor.user().profile.firstName || "";
        let lastName = Meteor.user().profile.lastName || "";

        this.setState({
            editable: !this.state.editable,
            email,
            firstName,
            lastName
        })
    }

    onSubmit(e){
        e.preventDefault();
        let form = $(e.target);

        let firstName = form.find("#firstName").val();
        let lastName = form.find("#lastName").val();
        let email = form.find('#email').val();


        Meteor.users.update({_id: Meteor.userId()},{
            $set:{
                'profile.email': email,
                'profile.firstName': firstName,
                'profile.lastName': lastName
            }
        });
        this.setState({
            editable: !this.state.editable
        })
    }



    render(){
        const collectionData = this.state.teams.map((item, key) =>{
                <TeamsCards name={item.name} members={item.members} key={key}/>
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
                               <div className="block-header bg-amethyst">
                                   <h3 className="block-title">Personal</h3>
                               </div>
                               <div className="block-content block-content-full block-content-narrow">
                                   <form className="js-validation-register form-horizontal push-50-t push-50" onSubmit={this.onSubmit}>
                                       <div className="form-group">
                                           <div className="col-xs-12">
                                               <div className="form-material form-material-primary">
                                                   {this.state.editable?
                                                       <input placeholder="Enter your First Name" onChange={this.handleChange} value={ this.state.firstName } id="firstName" type="text" className="form-control"/>
                                                       :
                                                       <input disabled placeholder="Enter your First Name" value={ this.state.firstName } id="firstName" type="text" className="form-control"/>

                                                   }
                                                   <label htmlFor="first_name">First Name</label>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="form-group">
                                           <div className="col-xs-12">
                                               <div className="form-material form-material-primary">
                                                   {this.state.editable?
                                                       <input placeholder="Enter your Last Name" onChange={this.handleChange} value={ this.state.lastName } id="lastName" type="text" className="form-control"/>
                                                       :
                                                       <input disabled placeholder="Enter your Last Name" value={ this.state.lastName } id="lastName" type="text" className="form-control"/>
                                                   }
                                                   <label htmlFor="last_name">Last Name</label>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="form-group">
                                           <div className="col-xs-12">
                                               <div className="form-material form-material-primary">
                                                   {this.state.editable?
                                                       <input placeholder="Enter your Email Address" onChange={this.handleChange} value = { this.state.email } id="email" type="email" className="form-control"/>
                                                       :
                                                       <input disabled placeholder="Enter your Email Address" value = { this.state.email } id="email" type="email" className="form-control"/>

                                                   }
                                                   <label htmlFor="email">Email</label>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-xs-12">
                                           <div className="form-material form-material-primary">
                                               <div className="collection col-xs-12">
                                                   <div className="row list-padding bg-amethyst-light">
                                                       <div className="col s5 center-align">
                                                           <h5>Team Name</h5>
                                                       </div>
                                                       <div className="col s7 center-align">
                                                           <h5>Members</h5>
                                                       </div>
                                                   </div>
                                                   {
                                                       collectionData
                                                   }
                                               </div>
                                           </div>
                                       </div>
                                       <div className="form-group">
                                           {this.state.editable?
                                               <div className="row-xs-12 row-sm-6 row-md-5">
                                                   <div className="col s6">
                                                       <button className="btn btn-block btn-success" type="submit"> <i className="material-icons center-align small pull-right">done</i>Submit</button>
                                                   </div>
                                                   <div className="col s6">
                                                       <button className="btn btn-block btn-danger pull-right" onClick={this.onEdit}> <i className="material-icons center-align small pull-right">cancel</i>Cancel</button>
                                                   </div>
                                               </div>:
                                               <div className="col-xs-12 col-sm-6 col-md-5">
                                                   <button className="btn btn-block btn-info pull-right" onClick={this.onEdit}> <i className="material-icons center-align small pull-right">edit</i>Edit</button>
                                               </div>
                                           }
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