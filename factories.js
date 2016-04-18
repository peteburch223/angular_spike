toDoApp.factory('myFactory', [function(){
  var Todo = function(toDoText){
    this.text = toDoText;
    this.completed = false;
  };
  Todo.prototype.complete = function () {
    this.completed = true;
  };
  return Todo;
}]);

toDoApp.factory('ToDoAPI', [function(){
  return new ToDoAPI();
}]);
