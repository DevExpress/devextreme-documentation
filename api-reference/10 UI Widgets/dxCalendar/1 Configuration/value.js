//<!--@Knockout-->
var myViewModel = {
    calendarValue: ko.observable(new Date())
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.calendarValue = new Date();
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCalendar").dxCalendar({
    value: new Date(),
    onValueChanged: function (e) {
        $("#valueSelector").dxDateBox("instance").option("value", e.value);
    }
});
$("#valueSelector").dxDateBox({
    type: "date",
    value: new Date(),
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("value", e.value);
    }
});
//<!--/@jQuery-->
