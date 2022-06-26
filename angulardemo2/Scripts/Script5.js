/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);

myApp.controller("myemployee", function ($scope) {
    var e = [
        { name: "siva", dateOfBirth: new Date("November 23,1980"), gender: "Female", Salary: 50000.23 },
        { name: "pranee", dateOfBirth: new Date("May 05,1970"), gender: " Male", Salary: 51000 },
        { name: "sundal", dateOfBirth: new Date("October 27,1979"), gender: "Male", Salary: 55000 },
        { name: "sathya", dateOfBirth: new Date("December 30,1983"), gender: "Female", Salary: 400000 }

    ];
    $scope.e = e;
    $scope.sortColumn = "name";
});