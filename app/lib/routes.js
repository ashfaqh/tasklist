Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('taskdetail/:_id', {
  name: 'Taskdetail',
  controller: 'TaskdetailController',
  action: 'action',
  where: 'client'
});

Router.route('taskdetail/:_id/edit', {
  name: 'EditTask',
  controller: 'TaskdetailController',
  action: 'edit',
  where: 'client'
});