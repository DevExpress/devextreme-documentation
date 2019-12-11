//<!--@Knockout-->
var myViewModel = {
    firstDayOfWeekValue: ko.observable(0)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.firstDayOfWeekValue = 0;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCalendar").dxCalendar({});
$("#firstDaySelector").dxNumberBox({
    showSpinButtons: true,
    min: 0,
    max: 6,
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("firstDayOfWeek", e.value);
    }
});
//<!--/@jQuery-->
