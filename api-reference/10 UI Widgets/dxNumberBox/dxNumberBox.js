//<!--@Knockout-->
var myViewModel = {
    number: ko.observable(0)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.number = 0;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true,
    step: 5,
    value: 0,
    onValueChanged: function (e) {
        $("#valueField").text(e.value);
    }
});
//<!--/@jQuery-->
