//<!--@Knockout-->
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
$(function () {
    $("#myButton").dxButton({
        text: 'Click me',
        icon: 'myicon'
    });
});
//<!--/@jQuery-->