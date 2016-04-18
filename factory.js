toDoApp.factory('myFactory', [function(){
  Todo = function(toDoText){
    this.text = toDoText;
    this.completed = false;
  };
  Todo.prototype.complete = function () {
    this.completed = true;
  };
  return Todo;
}]);
