//<!--@Knockout-->
var myViewModel = {
    currentValue1: ko.observable(""),
    currentValue2: ko.observable("")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.currentValue1 = "";
    $scope.currentValue2 = "";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox1").dxTextBox({
    mask: '+1(000)000-0000',
    useMaskedValue: true,
    valueChangeEvent: 'keyup',
    value: "",
    onValueChanged: function (e) {
        $("#currentValue1").text(e.value);
    }
});
$("#myTextBox2").dxTextBox({
    mask: '+1(000)000-0000',
    useMaskedValue: false,
    valueChangeEvent: 'keyup',
    value: "",
    onValueChanged: function (e) {
        $("#currentValue2").text(e.value);
    }
});
//<!--/@jQuery-->

