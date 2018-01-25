angular.module('mainModule', [])
    .filter('toUpperCase', function () {
        return function (text) {
            return text.toUpperCase();
        }
    }).controller('FiltersController', function($scope) {
        $scope.randomText = 'RaNdOm tExT tO tRaNsFoRm tO UppErCase';
        $scope.object = {
            name: 'David',
            age: 26
        };
        $scope.price = 24;
});