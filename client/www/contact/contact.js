import { Template } from 'meteor/templating'

Router.route('/contact', function () {
	this.render('contact');
}, {
	data: {}
});

Template.contact.onCreated(function () {
});

Template.contact.onRendered(function () {
	document.title = "My Contact";
});

Template.contact.events({});

Template.contact.helpers({});