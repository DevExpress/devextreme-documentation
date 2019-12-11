//<!--@Knockout-->
var myViewModel = {
    showRangeValue: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.showRangeValue = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlider").dxSlider({
    min: 1,
    max: 100,
    value: 38,
    showRange: true
});
$("#showRangeSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("showRange", e.value);
    }
})
//<!--/@jQuery-->