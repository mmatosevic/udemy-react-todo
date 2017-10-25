var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi.jsx');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate: function() {
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [...this.state.todos, {id: uuid(), text: text, completed: false}]
        });
    },
    handleToggle: function(todoId) {
        var changedTodos = this.state.todos.map((todo) => {
            if(todoId === todo.id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: changedTodos
        });
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
               <TodoList todos={todos} onToggle={this.handleToggle}/>
               <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;