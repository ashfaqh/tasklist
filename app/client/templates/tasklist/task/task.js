/*****************************************************************************/
/* Task: Event Handlers */
/*****************************************************************************/
Template.Task.events({
	'click [name=isDone]': function(event, tmpl) {
		var id = this._id;
		var isDone = tmpl.find('input').checked;
		Meteor.call('/app/task/updateIsDone', id, isDone);
	},
	'click [name=delete]': function(event, tmpl) {
		var id = this._id;
		Meteor.call('/app/task/remove', id);
	}
});

/*****************************************************************************/
/* Task: Helpers */
/*****************************************************************************/
Template.Task.helpers({
	isDone: function () {
		return this.isDone? 'checked' : '';
	},
	formatDate: function(createdOn) {
		return moment(createdOn).format('LLL');
	},
	isDoneChecked: function() {
		return this.isDone? true : false;
	}
});

/*****************************************************************************/
/* Task: Lifecycle Hooks */
/*****************************************************************************/
Template.Task.created = function () {
};

Template.Task.rendered = function () {
};

Template.Task.destroyed = function () {
};
