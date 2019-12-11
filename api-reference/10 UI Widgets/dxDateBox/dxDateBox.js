//<!--@Knockout-->
var myViewModel = {
    date: new Date(),
    time: new Date(),
    dateTime: new Date()
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.date = new Date();
    $scope.time = new Date();
    $scope.dateTime = new Date();
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#dateFormat").dxDateBox({
    value: new Date(),
    format: 'date'
});
$("#timeFormat").dxDateBox({
    value: new Date(),
    format: 'time'
});
$("#dateTimeFormat").dxDateBox({
    value: new Date(),
    format: 'datetime'
});
//<!--/@jQuery-->