var $ = require('jQuery');

module.exports = {
    setTodos: (todos) => {
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: () => {
        try{
            var savedTodos = JSON.parse(localStorage.getItem('todos'));
        }catch (e){
            return [];
        }
        return $.isArray(savedTodos) ? savedTodos : [];
    }
}