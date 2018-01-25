angular.module('MyApp', [])
    .controller('FirstController', function ($scope, $http) {
        $scope.posts = [];
        $scope.isLoading = true;
        $http.get('http://jsonplaceholder.typicode.com/posts').then(function (response) {
            $scope.posts = response.data;
            $scope.isLoading = false;

        }, function (err) {
            $scope.isLoading = false;
            console.log(err);
        })
    });