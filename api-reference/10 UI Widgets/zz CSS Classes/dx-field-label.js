//<!--@Knockout-->
firstName = ko.observable("John");
lastName = ko.observable("Smith");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Smith';
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#firstNameTextBox").dxTextBox({
        value: 'John',
        onValueChanged: function (e) {
            $("#firstName").text(e.value);
        }
    });
    $("#lastNameTextBox").dxTextBox({
        value: 'Smith',
        onValueChanged: function (e) {
            $("#lastName").text(e.value);
        }
    });
});
//<!--/@jQuery-->
