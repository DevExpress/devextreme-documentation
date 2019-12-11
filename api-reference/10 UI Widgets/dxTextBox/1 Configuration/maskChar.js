//<!--@Knockout-->
var myViewModel = {
    currentChar: ko.observable("_")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentChar = "?";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#zip").dxTextBox({
    mask: '000000',
    maskChar: '_'
});
$("#phone").dxTextBox({
    mask: '+1(999)000-0000',
    maskChar: '_'
});
$("#price").dxTextBox({
    mask: '$9999,00',
    maskChar: '_'
});
$("#charSelector").dxTextBox({
    value: "_",
    onValueChanged: function (e) {
        $("#zip").dxTextBox("instance").option("maskChar", e.value);
        $("#phone").dxTextBox("instance").option("maskChar", e.value);
        $("#price").dxTextBox("instance").option("maskChar", e.value);
    }
});
//<!--/@jQuery-->
