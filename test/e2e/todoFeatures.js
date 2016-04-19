describe('Todos tracker', function(){
  it('has a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });
  it('contains todo1', function(){
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  });
});
