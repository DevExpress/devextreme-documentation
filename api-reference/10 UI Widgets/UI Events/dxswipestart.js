//<!--@Knockout-->
myEventHandler = function () {
    DevExpress.ui.dialog.alert("The swipe gesture has been started.", "Event raised");
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.myEventHandler = function () {
        DevExpress.ui.dialog.alert("The swipe gesture has been started.", "Event raised");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var myEventHandler = function () {
    DevExpress.ui.dialog.alert("The swipe gesture has been started.", "Event raised");
};

$("#myElement").on({
    "dxswipestart": myEventHandler
});
//<!--/@jQuery-->
