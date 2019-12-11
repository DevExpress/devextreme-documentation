//<!--@Knockout-->
var myViewModel = {
    valueChanged: function (e) {
        DevExpress.ui.notify("New number box value is " + e.value);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.valueChanged = function (e) {
        DevExpress.ui.notify("New number box value is " + e.value);
    };
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
    onValueChanged: function (e) {
        DevExpress.ui.notify("New number box value is " + e.value);
    }
});
//<!--/@jQuery-->
