TaskList = new Mongo.Collection('TaskList');


if (Meteor.isServer) {
  TaskList.allow({
    insert: function (userId, doc) {
      return userId === doc.createdBy;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId == doc.createdBy;
    },

    remove: function (userId, doc) {
      return userId == doc.createdBy;
    }
  });

/*  Tasklist.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  }); */
}
