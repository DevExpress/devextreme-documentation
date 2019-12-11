//<!--@Knockout-->
var myViewModel = {
    checkBoxText: ko.observable("Check me")
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.checkBoxText = "Check me";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCheckBox").dxCheckBox({
    text: "Check me"
});
$("#textField").dxTextBox({
    value: "Check me",
    onValueChanged: function (e) {
        $("#myCheckBox").dxCheckBox("instance").option("text", e.value);
    }
});
//<!--/@jQuery-->
