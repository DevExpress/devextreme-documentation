//<!--@Knockout-->
startEventHandler = function () {
    DevExpress.ui.notify("Mouse pointer is over the element", "success", 1500);
};
endEventHandler = function () {
    DevExpress.ui.notify("Mouse pointer has left the element", "error", 1500);
};
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.startEventHandler = function () {
        DevExpress.ui.notify("Mouse pointer is over the element", "success", 1500);
    };
    $scope.endEventHandler = function () {
        DevExpress.ui.notify("Mouse pointer has left the element", "error", 1500);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var startEventHandler = function () {
    DevExpress.ui.notify("Mouse pointer is over the element", "success", 1500);
};
var endEventHandler = function () {
    DevExpress.ui.notify("Mouse pointer has left the element", "error", 1500);
};

$("#myElement").on({
    "dxhoverend": endEventHandler,
    "dxhoverstart": startEventHandler
});
//<!--/@jQuery-->
