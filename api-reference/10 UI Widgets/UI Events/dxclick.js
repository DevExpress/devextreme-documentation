//<!--@Knockout-->
myEventHandler = function () {
    DevExpress.ui.dialog.alert("The element has been clicked.", "Event raised");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.myEventHandler = function () {
        DevExpress.ui.dialog.alert("The element has been clicked.", "Event raised");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var myEventHandler = function () {
    DevExpress.ui.dialog.alert("The element has been clicked.", "Event raised");
};

$("#myElement").on("dxclick", myEventHandler);
//<!--/@jQuery-->
