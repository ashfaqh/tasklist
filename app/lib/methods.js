/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   *  if (this.isSimulation) {
   *    // do some client stuff while waiting for
   *    // result from server.
   *    return;
   *  }
   *
   *  // server method logic
   * }
   */

   '/app/task/insert': function (task) {
      if (this.isSimulation) {
         return;
      }

      TaskList.insert({
         task: task,
         isDone: false,
         createdOn: new Date,
         createdBy: Meteor.userId()
      });
   },

   '/app/task/updateIsDone': function(id, isDone) {

      TaskList.update({_id: id}, {
         $set: {
            isDone: isDone
         }
      });
   },

   '/app/task/remove': function(id) {
      TaskList.remove({_id: id});
   },

   '/app/task/update': function(id, task, description) {
      TaskList.update({_id: id}, {
         $set: {
            task: task,
            taskDescription: description
         }
      });
   }

});
