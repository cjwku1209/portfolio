import { Template } from 'meteor/templating';

Template.header.onCreated(function () {

});

Template.header.onRendered(function () {
	document.title = "My new title";
});

Template.header.events({});

Template.header.helpers({});