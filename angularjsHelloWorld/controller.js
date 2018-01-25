var app = angular.module('myFirstAngularApp', [
    //Modules that we are to import in our APP.
]).controller('FirstController', ['$scope', '$http', function (scope, http) {
    scope.posts = [];
    scope.newpost = {};

    http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            scope.posts = response.data;
        }, function (err) {
            console.log(err);
        });

    scope.addPost = function () {
        console.log('add post');
        http.post('https://jsonplaceholder.typicode.com/posts', {
            title: scope.newpost.title,
            body: scope.newpost.body,
            userId: 1
        })
            .then(function (data, status, headers, config) {
                console.log(data);
                scope.posts.push(scope.newpost);
                scope.newpost = {};
            }, function (err, status, headers, config) {
                console.log(err);
            })
    }
}]);