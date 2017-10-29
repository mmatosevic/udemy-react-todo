var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi.jsx');
var uuid = require('node-uuid');
var moment = require('moment');

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
            todos: [...this.state.todos, 
                {
                    id: uuid(), 
                    text: text, 
                    completed: false, 
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleToggle: function(todoId) {
        var changedTodos = this.state.todos.map((todo) => {
            if(todoId === todo.id){
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        var {todos, showCompleted, searchText} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
               <TodoList todos={TodoApi.filterTodos(todos, showCompleted, searchText)} onToggle={this.handleToggle}/>
               <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;