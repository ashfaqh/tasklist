/*****************************************************************************/
/* TaskList: Event Handlers */
/*****************************************************************************/
Template.TaskList.events({
});

/*****************************************************************************/
/* TaskList: Helpers */
/*****************************************************************************/
Template.TaskList.helpers({
	tasklist: function() {
		return TaskList.find({createdBy: Meteor.userId()}, {
			sort: {createdOn: -1}
		});
	}
});

/*****************************************************************************/
/* TaskList: Lifecycle Hooks */
/*****************************************************************************/
Template.TaskList.created = function () {
};

Template.TaskList.rendered = function () {
};

Template.TaskList.destroyed = function () {
};
