//<!--@Knockout-->
var myViewModel = {
    stepValue: ko.observable(5)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.stepValue = 5;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true,
    step: 5
});
$("#stepSelector").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true,
    value: 5,
    onValueChanged: function (e) {
        $("#myNumberBox").dxNumberBox("instance").option("step", e.value);
    }
});
//<!--/@jQuery-->
