//<!--@Knockout-->
var myViewModel = {
    todayButtonVisible: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.todayButtonVisible = false
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
    showTodayButton: false
});
$("#todayButtonSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("showTodayButton", e.value);
    }
});
//<!--/@jQuery-->
