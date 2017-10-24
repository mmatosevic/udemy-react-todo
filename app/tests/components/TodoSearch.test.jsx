var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require("expect");
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('Should invoke callback when search checkbox changes', () => {
        var onSearchSpy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={onSearchSpy}/>);
        
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(onSearchSpy).toHaveBeenCalledWith(true, '');
    })

    it('Should invoke callback when search text changes', () => {
        var onSearchSpy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={onSearchSpy}/>);
        
        todoSearch.refs.searchText.value = 'a';
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(onSearchSpy).toHaveBeenCalledWith(false, 'a');
    })
})