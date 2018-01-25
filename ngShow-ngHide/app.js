angular.module('MyApp', [])
    .controller('FirstController', function ($scope, $http) {
        $scope.posts = [];
    $http.get('http://jsonplaceholder.typicode.com/posts').then(function (response) {
        $scope.posts = response.data;
    }, function (err) {
        console.log(err);
    })
});