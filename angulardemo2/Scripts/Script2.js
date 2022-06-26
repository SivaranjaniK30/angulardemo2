/// <reference path="angular.min.js" />



var myApp = angular.module("myMod", []);
/*
myApp.controller("myc", function ($scope) {
    $scope.message = "Angular JS practise";
});*/

/*
myApp.controller("myemp", function ($scope) {
    var emp = [
        { firstname: "siva", lastname: "ranjani", gender: "Female" },
        { firstname: "siva", lastname: "suresh", gender: "male" },
        { firstname: "prithvi", lastname: "pranee", gender: "male" },
        {firstname: "sundhar", lastname: "c", gender: "male"}
    ];
    $scope.emp = emp;
});*/

myApp.controller("mycon", function ($scope) {
    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "manchester" },
                { name: "birmingham" },
            ]

        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" }
            ]

        },
        {
            name: "India",
            cities: [
                { name: "Hydrabad" },
                { name: "Chennai" },
                { name: "Mumbai" }
            ]

        }

    ];
    $scope.countries = countries;
});