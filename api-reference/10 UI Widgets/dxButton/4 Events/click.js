//<!--@Knockout-->
var myViewModel = {
    initializedHandler: function (e) {
        e.component.on("click", function () { DevExpress.ui.notify("Button was clicked", "success", 1000); });
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.initializedHandler = function (e) {
        e.component.on("click", function () { DevExpress.ui.notify("Button was clicked", "success", 1000); });
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myButton").dxButton({
    text: 'Click me!',
    onInitialized: function (e) {
        e.component.on("click", function () { DevExpress.ui.notify("Button was clicked", "success", 1000); });
    }
});
//<!--/@jQuery-->