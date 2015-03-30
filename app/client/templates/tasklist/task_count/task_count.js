/*****************************************************************************/
/* TaskCount: Event Handlers */
/*****************************************************************************/
Template.TaskCount.events({
});

/*****************************************************************************/
/* TaskCount: Helpers */
/*****************************************************************************/
Template.TaskCount.helpers({
	completedCount: function() {
		return TaskList.find({createdBy: Meteor.userId(), isDone: true}).count();
	},
	totalCount: function() {
		return TaskList.find({createdBy: Meteor.userId()}).count();
	}
});

/*****************************************************************************/
/* TaskCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TaskCount.created = function () {
};

Template.TaskCount.rendered = function () {
};

Template.TaskCount.destroyed = function () {
};
