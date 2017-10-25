var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require("expect");
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('Should exist', () => {
        expect(TodoApp).toExist();
    });

    it('Should add todo item when fired handle add todo', () => {
        var newTodoText = "New todo item text";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        var $el = $(ReactDOM.findDOMNode(todoApp));

        todoApp.handleAddTodo(newTodoText);

        var todos = todoApp.state.todos;
        expect(todos.length).toBe(5);

        var lastTodo = todos[4];
        expect(lastTodo.id).toExist();
        expect(lastTodo.text).toBe(newTodoText);
    });

    it('Should toggle correct item when handleToggle called', () => {
        var todoData = {id: 11, text: "Test fetures", completed: false};
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});