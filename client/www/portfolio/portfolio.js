import { Template } from 'meteor/templating'

Router.route('/portfolio', function () {
	this.render('portfolio');
}, {
	data: {}
});

Template.portfolio.onCreated(function () {
});

Template.portfolio.onRendered(function () {

});

Template.portfolio.events({});

Template.portfolio.helpers({});
