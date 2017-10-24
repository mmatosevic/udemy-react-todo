var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                },
                {
                    id: 2,
                    text: "Clean the yard"
                },
                {
                    id: 3,
                    text: "Finish DesktopStudio"
                },
                {
                    id: 4,
                    text: "Other from trello"
                }
            ]
        }
    },
    handleAddTodo: function(text) {
        alert("New todo: " + text);
        var currentTodos = this.state.todos;
        currentTodos.push({id: 5, text: text});
        this.setState({
            todos: currentTodos
        });
    },
    handleSearch: function(showCompleted, searchText){
        setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
               <TodoList todos={todos}/>
               <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;