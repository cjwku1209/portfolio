import { Template } from 'meteor/templating'

Router.route('/', function () {
	this.render('index');
}, {
	data: {}
});

Template.index.onCreated(function () {
});

Template.index.onRendered(function () {
	var scaleVal = Math.min($(window).width()/$("home").innerWidth(), $(window).height()/$("home").innerHeight());


});

Template.index.events({});

Template.index.helpers({});


