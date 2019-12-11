//<!--@Knockout-->
ko.applyBindings();
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScheduler").dxScheduler({
    dataSource: [],
    views: ['agenda'],
    currentView: 'agenda',
    height: 550,
    noDataText: '<h1>No Data!!!</h1>'
});
//<!--/@jQuery-->