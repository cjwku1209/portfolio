import { Template } from 'meteor/templating';

Template.header.onCreated(function () {

});

Template.header.onRendered(function () {
});

Template.header.events({
	'click #id_header_item_home': () => {
		window.location = '/';
	},
	'click #id_header_item_portfolio': () => {
		window.location = '/portfolio';
	},
	'click #id_header_item_about': () => {
		window.location = '/about';
	},
});

Template.header.helpers({});