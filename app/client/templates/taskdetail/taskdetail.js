/*****************************************************************************/
/* Taskdetail: Event Handlers */
/*****************************************************************************/
Template.Taskdetail.events({
	'submit form': function(event, tmpl) {
			event.preventDefault();
			var task = tmpl.find('input[name=task]').value;
			var taskdescription = tmpl.find('textarea[name=taskdescription]').value;
			Meteor.call('/app/task/update', this._id, task, taskdescription);
			Router.go('Taskdetail', {_id: this._id});
	}
});

/*****************************************************************************/
/* Taskdetail: Helpers */
/*****************************************************************************/
Template.Taskdetail.helpers({
});

/*****************************************************************************/
/* Taskdetail: Lifecycle Hooks */
/*****************************************************************************/
Template.Taskdetail.created = function () {
};

Template.Taskdetail.rendered = function () {
};

Template.Taskdetail.destroyed = function () {
};
