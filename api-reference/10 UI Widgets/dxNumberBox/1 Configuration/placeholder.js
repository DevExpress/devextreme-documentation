//<!--@Knockout-->
var myViewModel = {
    numberBoxPlaceholder: ko.observable("Enter number")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.numberBoxPlaceholder = "Enter number";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    value: null,
    placeholder: "Enter number"
});
$("#placeholderField").dxTextBox({
    value: "Enter number",
    onValueChanged: function (e) {
        $("#myNumberBox").dxNumberBox("instance").option("placeholder", e.value);
    }
});
//<!--/@jQuery-->
