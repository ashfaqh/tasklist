/*****************************************************************************/
/* Task: Event Handlers */
/*****************************************************************************/
Template.Task.events({
	'click [name=isDone]': function(event, tmpl) {
		var id = this._id;
		var isDone = tmpl.find('input').checked;
		TaskList.update({_id: id}, {
			$set: {
				isDone: isDone
			}
		});
	},
	'click [name=delete]': function(event, tmpl) {
		var id = this._id;
		TaskList.remove({_id: id});
	}
});

/*****************************************************************************/
/* Task: Helpers */
/*****************************************************************************/
Template.Task.helpers({
	isDone: function () {
		return this.isDone? 'checked':'';
	},
	formatDate: function(createdOn) {
		return moment(createdOn).format('LLL');
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
