var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require("expect");
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });

    it('Should render one Todo component for each todo item', () => {
        var todos = [
            {
                "id": 1,
                "text": "Do something"
            },
            {
                "id": 2,
                "text": "Check mail"
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponenets = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponenets.length).toBe(2);
    });

    it('Should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find(".container__message").length).toBe(1);
    });

    
});