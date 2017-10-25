var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require("expect");
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });

    it('Should call handler when todo completed checkbox is clicked', () => {
        var todoItem = {id: 1, text: "Dummy", completed: false};
        var todoToggleSpy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo key={todoItem.id} {...todoItem} onToggle={todoToggleSpy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(todoToggleSpy).toHaveBeenCalledWith(1);
    });
});