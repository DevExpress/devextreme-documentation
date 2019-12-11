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
    max: 99,
    value: 50,
    onValueChanged: function (e) {
        $("#sliderValue").text(e.value);
    }
});
//<!--/@jQuery-->
