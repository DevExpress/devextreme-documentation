//<!--@Knockout-->
var myViewModel = {
    buttonText: 'Click me',
    buttonClicked: function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.buttonText = "Click me";
    $scope.buttonClicked = function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myButton").dxButton({
    text: 'Click me',
    onClick: function () {
        DevExpress.ui.notify("The button is clicked", "success", 1000);
    }
});
//<!--/@jQuery-->
