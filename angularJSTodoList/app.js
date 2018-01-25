angular.module('TodoList', ['LocalStorageModule'])
    .controller('TodoController', ['$scope', 'localStorageService', function (scope, localStorage) {
        var localStorageItems = localStorage.get('todoItems');
        scope.todo = localStorageItems ? localStorageItems : [];
        scope.$watchCollection('todo', function() {
            localStorage.set('todoItems', scope.todo);
        });
        scope.addTask = function () {
            scope.todo.push(scope.newTask);
            scope.newTask = {};
        };
        scope.cleanTasksList = function () {
            scope.todo = [];
        }
    }]);