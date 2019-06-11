import React from 'react';


export default class Personal extends React.Component{
    constructor(){
        super();
        this.state={
            editable: false
        };

        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(){
        this.setState({
            editable: !this.state.editable
        })
    }



    render(){
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
                                   <form className="s-validation-register form-horizontal push-50-t push-50">
                                       <div className="row">
                                           <div className="input-field col s6">
                                               {this.state.editable?
                                                   <input placeholder="Enter your First Name" id="personal-given_name" type="text" className="validate"/>
                                                   :
                                                   <input disabled placeholder="Enter your First Name" id="personal-given_name" type="text" className="validate"/>

                                               }
                                               <label htmlFor="first_name">First Name</label>
                                           </div>
                                           <div className="input-field col s6">
                                               {this.state.editable?
                                                   <input placeholder="Enter your First Name" id="personal-family_name" type="text" className="validate"/>
                                                    :
                                                   <input disabled placeholder="Enter your First Name" id="personal-family_name" type="text" className="validate"/>
                                               }
                                               <label htmlFor="last_name">Last Name</label>
                                           </div>
                                       </div>
                                       <div className="row">
                                           <div className="input-field col s12">
                                               {this.state.editable?
                                                   <input placeholder="Enter your Email Address" id="personal-email" type="email" className="validate"/>
                                                    :
                                                   <input disabled placeholder="Enter your Email Address" id="personal-email" type="email" className="validate"/>

                                               }
                                               <label htmlFor="email">Email</label>
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