var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodoApi', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('Should exist', () => {
        expect(TodoApi).toExist();
    });

    describe('setTodos', () => {
        it('Should save valid array into local storage', () => {
            var todos = [{
                id: 1,
                text: 'test',
                completed: false
            }];
            TodoApi.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('Should not set invalid todos to storage', () => {
            var badTodos = {a: 'crappy'};
            TodoApi.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);

        });
    });

    describe('getTodos', () => {
        it('Should not get invalid data but empty array', () => {
            var todos = TodoApi.getTodos();
            expect(todos).toEqual([]);
        });

        it('Should return valid data from local storage', () => {
            var originalTodos = [{id: 2, text: 'Bull', completed: true}];
            localStorage.setItem('todos', JSON.stringify(originalTodos));
            var todos = TodoApi.getTodos();

            expect(todos).toEqual(originalTodos);
        });

    });

    describe('filterTodos', () => {
        const allTodos = [
            {id: 1, text: "First todo item", completed: false},
            {id: 2, text: "Wash potatoes", completed: false},
            {id: 3, text: "Buy milk", completed: true},
            {id: 4, text: "Boil eggs", completed: true},
            {id: 5, text: "Buy new laptop", completed: false}
        ];

        it('Should return all todos if no string is specified', () => {
            var filtered = TodoApi.filterTodos(allTodos, true, '');
            expect(filtered.length).toBe(allTodos.length);
        });

        it('Should return just todos matching search string', () => {
            var filtered = TodoApi.filterTodos(allTodos, true, 'Buy');
            expect(filtered.length).toBe(2);
            var filteredIds = filtered.map((todo) => {
                return todo.id
            });
            expect(filteredIds).toContain(3);
            expect(filteredIds).toContain(5);
        });

        it('Should return only non completed items', () => {
            var filtered = TodoApi.filterTodos(allTodos, false, '');
            expect(filtered.length).toBe(3);
        });

        it('Should sort by completed status', () => {
            var filtered = TodoApi.filterTodos(allTodos, true, '');
            expect(filtered[0].completed).toBe(false);
            expect(filtered[4].completed).toBe(true);
        });
    });

});