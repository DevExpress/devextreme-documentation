//<!--@Knockout-->
var myViewModel = {
    currentZoom: ko.observable('month')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentZoom = 'month';
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCalendar").dxCalendar({});
$("#zoomSelector").dxSelectBox({
    items: ['month', 'year', 'decade', 'century'],
    value: 'month',
    onValueChanged: function (e) {
        $("#myCalendar").dxCalendar("instance").option("zoomLevel", e.value);
    }
});
//<!--/@jQuery-->
