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

});