/**
 * Created by oleksandr on 10.02.16.
 */
var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
    $scope.message = "Hello, AngularJS";
});