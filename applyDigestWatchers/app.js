angular.module('mainModule', []).controller('FirstController', function ($scope) {
    $scope.name = 'Mary';

    setTimeout(function () {
        //<h1> tag in html is not updated because it's outside Angular context.
        //The way to do this would be $scope.$digest(); It will 'ask' to the watchers if some attribute changed
        $scope.$apply(function () {
            //$scope.$apply() is a better way to do it. $apply calls to $digest.
            //This could be useful in specifics case using setTimeout, setInterval, or jQuery.
            $scope.name = 'Louisa';
        });

    }, 1000);

});