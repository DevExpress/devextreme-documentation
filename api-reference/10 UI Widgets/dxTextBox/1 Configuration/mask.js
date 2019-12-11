//<!--@Knockout-->
ko.applyBindings();
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function () {});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#zip").dxTextBox({
    mask: '000000'
});
$("#phone").dxTextBox({
    mask: '+1(000)000-0000'
});
$("#price").dxTextBox({
    mask: '$9999,\\0\\0'
});
//<!--/@jQuery-->
