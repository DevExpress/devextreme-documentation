//<!--@Knockout-->
var myViewModel = {
    rangeStart: ko.observable(30),
    rangeEnd: ko.observable(70),
    stepValue: ko.observable(1)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.rangeStart = 30;
    $scope.rangeEnd = 70;
    $scope.stepValue = 1;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myRangeSlider").dxRangeSlider({
    min: 0,
    max: 100,
    start: 30,
    end: 70,
    step: 1,
    onValueChanged: function (e) {
        $("#rangeStart").text(e.start);
        $("#rangeEnd").text(e.end);
    }
});
$("#stepSelector").dxNumberBox({
    min: 1,
    max: 10,
    value: 1,
    showSpinButtons: true,
    onValueChanged: function (e) {
        $("#myRangeSlider").dxRangeSlider("instance").option("step", e.value);
    }
});
//<!--/@jQuery-->
