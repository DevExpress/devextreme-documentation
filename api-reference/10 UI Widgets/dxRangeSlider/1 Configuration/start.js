//<!--@Knockout-->
var myViewModel = {
    rangeStart: ko.observable(65),
    rangeEnd: ko.observable(85)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.rangeStart = 65;
    $scope.rangeEnd = 85;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myRangeSlider").dxRangeSlider({
    min: 50,
    max: 100,
    start: 65,
    end: 85,
    onValueChanged: function (e) {
        $("#rangeStart").text(e.start);
        $("#rangeEnd").text(e.end);
    }
});
//<!--/@jQuery-->
