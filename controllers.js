toDoApp.controller('ToDoController', function() {
  // we can set an attribute like any other JavaScript object
  this.todos = [{text:"ToDo1", completed:false}, {text:"ToDo2", completed:true}, {text:"ToDo3", completed:false}];
});
