//<!--@Knockout-->
var myViewModel = {
    resizeStarted: function () {
        DevExpress.ui.notify("Resizing started", "info", 1500);
    },
    resizeFinished: function () {
        DevExpress.ui.notify("Resizing finished", "success", 1500);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.resizeStarted = function () {
        DevExpress.ui.notify("Resizing started", "info", 1500);
    };
    $scope.resizeFinished = function () {
        DevExpress.ui.notify("Resizing finished", "success", 1500);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myResizable").dxResizable({
    direction: 'right bottom',
    minHeight: 100,
    minWidth: 200,
    maxHeight: 400,
    maxWidth: 300,
    width: 200,
    height: 100,
    onResizeStart: function () {
        DevExpress.ui.notify("Resizing started", "info", 1500);
    },
    onResizeEnd: function () {
        DevExpress.ui.notify("Resizing finished", "success", 1500);
    }
});
//<!--/@jQuery-->
