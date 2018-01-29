import { Template } from 'meteor/templating'

Router.route('/about', function () {
	this.render('about');
}, {
	data: {}
});

Template.about.onCreated(function () {
});

Template.about.onRendered(function () {
	document.title = "about ME";
});

Template.about.events({});

Template.about.helpers({});