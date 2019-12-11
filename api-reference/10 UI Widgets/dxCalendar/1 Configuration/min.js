//<!--@Knockout-->
var myViewModel = {
    minDate: ko.observable(new Date()),
    maxDate: ko.observable(new Date())
}
myViewModel.minDate().setDate(myViewModel.minDate().getDate() - 15);
myViewModel.maxDate().setDate(myViewModel.maxDate().getDate() + 15);
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    var minDate = new Date();
    var maxDate = new Date();
    minDate.setDate(minDate.getDate() - 15);
    maxDate.setDate(maxDate.getDate() + 15);
    $scope.minDate = minDate;
    $scope.maxDate = maxDate;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var minDate = new Date();
var maxDate = new Date();
minDate.setDate(minDate.getDate() - 15);
maxDate.setDate(maxDate.getDate() + 15);
$("#myCalendar").dxCalendar({
    min: minDate,
    max: maxDate
});
$("#minSelector").dxDateBox({
    type: "date",
    value: minDate,
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("min", e.value);
    }
});
$("#maxSelector").dxDateBox({
    type: "date",
    value: maxDate,
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("max", e.value);
    }
});
//<!--/@jQuery-->
