/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('TaskList', function (/* args */) {
  return TaskList.find({createdBy: this.userId});
});