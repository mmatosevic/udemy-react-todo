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

        var lastTodo = todos[todos.length-1]
        expect(lastTodo.id).toExist();
        expect(lastTodo.text).toBe(newTodoText);
        expect(lastTodo.createdAt).toBeA('number');
    });

    it('Should toggle correct item when handleToggle called', () => {
        var todoData = {id: 11, text: "Test fetures", completed: false, createdAt: 0, completedAt: undefined};
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].createdAt).toBe(0);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('Should clear completedAt value after un complete', () => {
        var todoData = {id: 11, text: "Test fetures", completed: true, createdAt: 0, completedAt: 10};
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todoData]
        });

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});