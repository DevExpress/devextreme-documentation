//<!--@Knockout-->
var myViewModel = {
    buttonText: 'Click me',
    buttonType: ko.observable("normal"),
    buttonTypes: ["normal", "back", "danger", "success", "default"],
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
    $scope.buttonType = "normal";
    $scope.buttonTypes = ["normal", "back", "danger", "success", "default"];
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
$("#typeSelector").dxSelectBox({
    dataSource: ["normal", "back", "danger", "success", "default"],
    onValueChanged: function (e) {
        $("#myButton").dxButton("instance").option("type", e.value);
    }
});
//<!--/@jQuery-->