import { Template } from 'meteor/templating';

Template.header.onCreated(function () {

});

Template.header.onRendered(function () {
	document.title = "My new title";
});

Template.header.events({
	'click #id_header_item_home': () => {
		window.location = '/';
	},
	'click #id_header_item_portfolio': () => {
		window.location = '/portfolio';
	},
});

Template.header.helpers({});