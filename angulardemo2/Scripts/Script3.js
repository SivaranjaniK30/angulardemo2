/// <reference path="angular.min.js" />



var myApp = angular.module("myMod", []);

myApp.controller("mytech", function ($scope) {
    var tech = [
        { name: "c#", likes: 0, Dislikes: 0 },
        { name: "ASP.NET", likes: 0, Dislikes: 0 },
        { name: "SQL server", likes: 0, Dislikes: 0 },
        { name: "Angular JS", likes: 0, Dislikes: 0 },
    ];

    $scope.tech = tech;

    $scope.incrementLikes=function(technology) {
        technology.likes++;
    }


    $scope.incrementDislikes = function (technology) {
        technology.Dislikes++;
    }
});

