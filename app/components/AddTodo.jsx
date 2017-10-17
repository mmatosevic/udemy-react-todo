var React = require('react');

var AddTodo = React.createClass({
    onTodoSubmit: function(e) {
        e.preventDefault();
        var todoInput = this.refs.todo;
        var todoText = todoInput.value;
        todoInput.value = '';

        if(typeof(todoText) === 'string' && todoText.length > 0){
            this.props.onAddTodo(todoText);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onTodoSubmit}>
                    <input type="text" ref="todo" placeholder="Describe what has to be done"/>
                    <button className="button" type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;