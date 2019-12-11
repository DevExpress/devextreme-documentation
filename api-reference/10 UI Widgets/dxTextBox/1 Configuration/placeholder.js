//<!--@Knockout-->
var myViewModel = {
    placeholderText: ko.observable("Type text here")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.placeholderText = "Type text here"
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox").dxTextBox({
    placeholder: 'Type text here'
});
$("#placeholderBox").dxTextBox({
    value: "Type text here",
    onValueChanged: function (e) {
        $("#myTextBox").dxTextBox("instance").option("placeholder", e.value);
    }
});
//<!--/@jQuery-->
