Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
	'click [data-logout]': function() {
		Meteor.logout();
	},
	'click [data-login]': function() {
		Meteor.loginWithMeteorDeveloperAccount();
	}
});
