/*****************************************************************************/
/* CreateTask: Event Handlers */
/*****************************************************************************/
Template.CreateTask.events({
	'submit form': function(event, tmpl) {
		event.preventDefault();
		var task = tmpl.find('input').value;
		Meteor.call('/app/task/insert', task);
		tmpl.find('form').reset();
	}
});

/*****************************************************************************/
/* CreateTask: Helpers */
/*****************************************************************************/
Template.CreateTask.helpers({
});

/*****************************************************************************/
/* CreateTask: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTask.created = function () {
};

Template.CreateTask.rendered = function () {
};

Template.CreateTask.destroyed = function () {
};
