//<!--@Knockout-->
shown = false;
myEventHandler = function () {
    if (!shown) {
        shown = true;
        DevExpress.ui.dialog.alert("The element has been swiped.", "Event raised")
            .done(function () {
                shown = false
            });
    }
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.shown = false;
    $scope.myEventHandler = function () {
        if (!$scope.shown) {
            $scope.shown = true;
            DevExpress.ui.dialog.alert("The element has been swiped.", "Event raised")
                .done(function () {
                    $scope.shown = false
                });
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var shown = false;
var myEventHandler = function () {
    if (!shown) {
        shown = true;
        DevExpress.ui.dialog.alert("The element has been swiped.", "Event raised")
            .done(function () {
                shown = false
            });
    }
};

$("#myElement").on({
    "dxswipe": myEventHandler
});
//<!--/@jQuery-->
