HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	this.subscribe('TaskList');
  },

  action: function() {
    this.render('Home');
  }
});
