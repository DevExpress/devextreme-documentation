//<!--@Knockout-->
var myViewModel = {
    buttonText: 'Click me',
    disabledValue: ko.observable(false),
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
    $scope.disabledValue = false;
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
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myButton").dxButton("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->