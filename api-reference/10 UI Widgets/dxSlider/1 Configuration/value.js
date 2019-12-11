//<!--@Knockout-->
var myViewModel = {
    currentValue: ko.observable(50)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentValue = 50;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlider").dxSlider({
    min: 1,
    max: 100,
    value: 50,
    onValueChanged: function (e) {
        $("#valueBox").dxNumberBox("instance").option("value", e.value);
    }
});
$("#valueBox").dxNumberBox({
    value: 50,
    min: 1,
    max: 100,
    showSpinButtons: true,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("value", e.value);
    }
});
//<!--/@jQuery-->
