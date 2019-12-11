//<!--@Knockout-->
myEventHandler = function () {
    DevExpress.ui.dialog.alert("A pointer parameter has been changed.", "Event raised");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.myEventHandler = function () {
        DevExpress.ui.dialog.alert("A pointer parameter has been changed.", "Event raised");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var myEventHandler = function () {
    DevExpress.ui.dialog.alert("A pointer parameter has been changed.", "Event raised");
};

$("#myElement").on({
    "dxpointermove": myEventHandler
});
//<!--/@jQuery-->
