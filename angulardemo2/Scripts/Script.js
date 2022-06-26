/// <reference path="angular.min.js" />



var myApp = angular.module("myMod", []);
/*
myApp.controller("myc", function ($scope) {
    $scope.message = "Angular JS practise";
});*/


myApp.controller("myemp", function ($scope) {
        var emp = {
            firstname:"siva",
            lastname:"ranjani",
            gender:"Female"
        };
        $scope.emp = emp;
    });