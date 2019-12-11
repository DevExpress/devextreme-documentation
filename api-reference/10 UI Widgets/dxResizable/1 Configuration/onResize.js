//<!--@Knockout-->
var myViewModel = {
    resized: function () {
        DevExpress.ui.notify("The widget is resized", "success", 1500);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.resized = function () {
        DevExpress.ui.notify("The widget is resized", "success", 1500);
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
    onResize: function () {
        DevExpress.ui.notify("The widget is resized", "success", 1500);
    }
});
//<!--/@jQuery-->
