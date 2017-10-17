var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require("expect");
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('Should exist', () => {
        expect(AddTodo).toExist();
    });

    it('Should invoke callback and clean input when clicked', () => {
        const text = "This is test todo";
        var addTodoSpy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={addTodoSpy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var $inputText = $el.find('input')[0];
        $inputText.value = text;

        var $submitForm = $el.find('form')[0];
        TestUtils.Simulate.submit($submitForm);

        expect(addTodoSpy).toHaveBeenCalledWith(text);
        expect($inputText.value).toBe('');
    });

    it('Should not invoke callback when clicked but invalid input', () => {
        var addTodoSpy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={addTodoSpy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var inputText = addTodo.refs.todo;
        inputText.value = '';

        var $submitForm = $el.find('form')[0];
        TestUtils.Simulate.submit($submitForm);

        expect(addTodoSpy).toNotHaveBeenCalled();
        expect(inputText.value).toBe('');
    });

});