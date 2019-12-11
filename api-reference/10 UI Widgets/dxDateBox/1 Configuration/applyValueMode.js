//<!--@Knockout-->
var myViewModel = {
    applyModes: ["instantly", "useButtons"],
    applyMode: ko.observable("instantly")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.applyModes = ["instantly", "useButtons"];
    $scope.applyMode = "instantly";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myDateBox").dxDateBox({
    format: 'date',
    pickerType: 'calendar'
});
$("#modeSelector").dxSelectBox({
    dataSource: ["instantly", "useButtons"],
    value: "instantly",
    onValueChanged: function (e) {
        $("#myDateBox").dxDateBox("instance").option("applyValueMode", e.value);
    }
});
//<!--/@jQuery-->