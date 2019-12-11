//<!--@Knockout-->
myEventHandler = function () {
    DevExpress.ui.dialog.alert("The element is being held during 750 milliseconds.", "Event raised");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.myEventHandler = function () {
        DevExpress.ui.dialog.alert("The element is being held during 750 milliseconds.", "Event raised");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var myEventHandler = function () {
    DevExpress.ui.dialog.alert("The element is being held during 750 milliseconds.", "Event raised");
};

$("#myElement").on("dxhold", myEventHandler);
//<!--/@jQuery-->
