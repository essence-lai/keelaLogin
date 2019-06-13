import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const User = {
    get: function() {
        return Meteor.user() || {};
    },

    id: function() {
        return Meteor.userId();
    },

    isLoggedIn: function() {
        return !! Meteor.userId();
    },

    isLoggedOut: function() {
        return ! User.isLoggedIn();
    },

    profile: function() {
        return User.get().profile;
    },

    create: function(opts, callback) {
        Accounts.createUser(opts, callback);
    },

    email: function() {
        let service = User.get() && User.get().services ? User.get().services.google.email : "";
        return service;
    },

    firstName: function(){
        let service = User.get() && User.get().services ? User.get().services.google.given_name : "";
        return service;
    },

    lastName: function(){
        let service = User.get() && User.get().services ? User.get().services.google.family_name : "";
        return service;
    },

    emails: function() {
        let service = User.get() && User.get().emails ? User.get().emails[0].address : "";
        return service;
    },

};