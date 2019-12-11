//<!--@Knockout-->
var myViewModel = {
    rangeVisible: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.rangeVisible = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myRangeSlider").dxRangeSlider({
    min: 50,
    max: 100,
    showRange: true
});
$("#rangeVisibilitySelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myRangeSlider").dxRangeSlider("instance").option("showRange", e.value);
    }
});
//<!--/@jQuery-->
