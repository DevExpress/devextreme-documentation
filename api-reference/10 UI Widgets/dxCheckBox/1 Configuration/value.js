//<!--@Knockout-->
var myViewModel = {
    checkBoxState: ko.observable(false),
    availableStates: ["true", "false", "undefined"],
    selectedState: ko.observable("false")
};
myViewModel.selectedState.subscribe(function (newValue) {
    switch (newValue) {
        case "true":
            myViewModel.checkBoxState(true);
            break;
        case "false":
            myViewModel.checkBoxState(false);
            break;
        default:
            myViewModel.checkBoxState(undefined);
            break;
    }
});
myViewModel.checkBoxState.subscribe(function (newValue) {
    switch (newValue) {
        case true:
            myViewModel.selectedState("true");
            break;
        case false:
            myViewModel.selectedState("false");
            break;
        default:
            myViewModel.selectedState("undefined");
            break;
    }
});
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.checkBoxState = false;
    $scope.availableStates = ["true", "false", "undefined"];
    $scope.selectedState = "false";
    $scope.$watch("selectedState", function () {
        switch ($scope.selectedState) {
            case "true":
                $scope.checkBoxState = true;
                break;
            case "false":
                $scope.checkBoxState = false;
                break;
            default:
                $scope.checkBoxState = undefined;
                break;
        }
    });
    $scope.$watch("checkBoxState", function () {
        switch ($scope.checkBoxState) {
            case true:
                $scope.selectedState = "true";
                break;
            case false:
                $scope.selectedState = "false";
                break;
            default:
                $scope.selectedState = "undefined";
                break;
        }
    });
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCheckBox").dxCheckBox({
    text: "Check me",
    onValueChanged: function (e) {
        switch (e.value) {
            case true:
                $("#stateSelector").dxSelectBox("instance").option("value", "true")
                break;
            case false:
                $("#stateSelector").dxSelectBox("instance").option("value", "false")
                break;
            default:
                $("#stateSelector").dxSelectBox("instance").option("value", "undefined")
                break;
        }
    }
});
$("#stateSelector").dxSelectBox({
    dataSource: ["true", "false", "undefined"],
    value: "false",
    onValueChanged: function (e) {
        switch (e.value) {
            case "true":
                $("#myCheckBox").dxCheckBox("instance").option("value", true)
                break;
            case "false":
                $("#myCheckBox").dxCheckBox("instance").option("value", false)
                break;
            default:
                $("#myCheckBox").dxCheckBox("instance").option("value", undefined)
                break;
        }
    }
});
//<!--/@jQuery-->
