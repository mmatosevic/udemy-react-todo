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
    },
    filterTodos: (todos, includeCompleted, searchPhrase) => {
        var searchPhraseMatchingTodos = todos.filter((todo) => {
            return searchPhrase === '' || todo.text.toLowerCase().includes(searchPhrase);
        });

        var matchingCompleted = searchPhraseMatchingTodos.filter((todo) => {
            return todo.completed === false || includeCompleted;
        });

        matchingCompleted.sort((a, b) => {
            if(a.completed === true && b.completed === false){
                return 1;
            }
            if(a.completed === false && b.completed === true){
                return -1;
            }
            return 0;
        });

        return matchingCompleted;
    }
}