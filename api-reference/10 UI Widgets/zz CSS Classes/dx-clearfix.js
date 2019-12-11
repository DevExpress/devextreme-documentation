//<!--@Knockout-->
applyClass = ko.observable(false);
changeValue = function (e) {
    if (e.value)
        $("#parentElement").addClass("dx-clearfix");
    else
        $("#parentElement").removeClass("dx-clearfix");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.applyClass = false;
    $scope.changeValue = function (e) {
        if (e.value)
            $("#parentElement").addClass("dx-clearfix");
        else
            $("#parentElement").removeClass("dx-clearfix");
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
                $("#parentElement").addClass("dx-clearfix");
            else
                $("#parentElement").removeClass("dx-clearfix");
        }
    });
});
//<!--/@jQuery-->
