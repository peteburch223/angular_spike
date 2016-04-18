toDoApp.service('todoService', ['$http','myFactory', function($http, myFactory){
  this.getAll = function(){
    var todos = [];
    $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(resp){
        resp.data.forEach(function(data){
          todos.push(new myFactory(data.text));
        });
      }, function(err){});
      return todos;
  };
}]);
