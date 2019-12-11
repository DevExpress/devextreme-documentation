//<!--@Knockout-->
myEventHandler = function () {
    DevExpress.ui.dialog.alert("The pointer has taken on the active buttons state.", "Event raised");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.myEventHandler = function () {
        DevExpress.ui.dialog.alert("The pointer has taken on the active buttons state.", "Event raised");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var myEventHandler = function () {
    DevExpress.ui.dialog.alert("The pointer has taken on the active buttons state.", "Event raised");
};

$("#myElement").on({
    "dxpointerdown": myEventHandler
});
//<!--/@jQuery-->
