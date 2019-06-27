console.log("Starting server...");

import '../../api/api.js';
import settings from '../../../settings'

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            loginStyle: "popup",
            clientId: settings.google.clientId, // See table below for correct property name!
            secret: settings.google.secret
        }
    }
);



const Teams = new Mongo.Collection('teams');

Meteor.methods({
   newTeam: function(post, callback){
       Teams.insert(post, callback)
   },
    findTeams: function(post){
       return Teams.find(post).fetch()
    }
});