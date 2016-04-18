angular.module('toDoApp')
.controller('ToDoController', ["myFactory", function(myFactory) {
  // we can set an attribute like any other JavaScript object
  var self=this;
  self.todos = [];

  self.addToDo = function(toDoText){
    self.todos.push(new Todo(toDoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
}]);
