//<!--@Knockout-->
var myViewModel = {
    currentStep: ko.observable(10)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentStep = 10;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlider").dxSlider({
    min: 0,
    max: 100,
    step: 10,
    value: 50,
    tooltip: {
        enabled: true,
        showMode: 'always'
    }
});
$("#stepBox").dxNumberBox({
    value: 10,
    min: 1,
    max: 20,
    showSpinButtons: true,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("step", e.value);
    }
});
//<!--/@jQuery-->
