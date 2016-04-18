angular.module('toDoApp')
.controller('ToDoController', ["todoService", "myFactory", function(todoService, myFactory) {
  console.log(myFactory)
  // we can set an attribute like any other JavaScript object
  var self=this;
  // self.todos = [];
  self.todos = todoService.getAll();

  self.addToDo = function(toDoText){
    self.todos.push(new myFactory(toDoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
}]);
