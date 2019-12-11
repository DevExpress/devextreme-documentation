//<!--@Knockout-->
applyClass = ko.observable(false);
changeValue = function (e) {
    if (e.value)
        $("#myButton").addClass("dx-state-focused");
    else
        $("#myButton").removeClass("dx-state-focused");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.applyClass = false;
    $scope.changeValue = function (e) {
        if (e.value)
            $("#myButton").addClass("dx-state-focused");
        else
            $("#myButton").removeClass("dx-state-focused");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#classSelector").dxSwitch({
        value: false,
        onValueChanged: function (e) {
            if (e.value)
                $("#myButton").addClass("dx-state-focused");
            else
                $("#myButton").removeClass("dx-state-focused");
        }
    });
    $("#myButton").dxButton({
        text: 'Click me'
    });
});
//<!--/@jQuery-->
