/*****************************************************************************/
/* CreateTask: Event Handlers */
/*****************************************************************************/
Template.CreateTask.events({
	'submit form': function(event, tmpl) {
		event.preventDefault();
		var task = tmpl.find('input').value;
		TaskList.insert({
			task: task,
			isDone: false,
			createdOn: new Date,
			createdBy: Meteor.userId()
		});

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
