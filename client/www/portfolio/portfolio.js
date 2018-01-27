import { Template } from 'meteor/templating'

Router.route('/portfolio', function () {
	this.render('portfolio');
}, {
	data: {}
});

Template.portfolio.onCreated(function () {
});

Template.portfolio.onRendered(function () {
	document.title = "My portfolio";
	$('iframe').height($('iframe').width()*9/16);
	console.log($('iframe').height())
});

Template.portfolio.events({

});

Template.portfolio.helpers({

});




