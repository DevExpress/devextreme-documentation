//<!--@Knockout-->
var myViewModel = {
    enableActiveState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.enableActiveState = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myRangeSlider").dxRangeSlider({
    min: 50,
    max: 100
});
$("#stateSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myRangeSlider").dxRangeSlider("instance").option("activeStateEnabled", e.value);
    }
});
//<!--/@jQuery-->
