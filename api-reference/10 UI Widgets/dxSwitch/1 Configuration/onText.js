//<!--@Knockout-->
var myViewModel = {
    onTextValue: ko.observable("ON"),
    offTextValue: ko.observable("OFF")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onTextValue = "ON";
    $scope.offTextValue = "OFF";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySwitch").dxSwitch({
    onText: "ON",
    offText: "OFF"
});
$("#onTextBox").dxTextBox({
    value: "ON",
    onValueChanged: function (e) {
        $("#mySwitch").dxSwitch("instance").option("onText", e.value);
    }
})
$("#offTextBox").dxTextBox({
    value: "OFF",
    onValueChanged: function (e) {
        $("#mySwitch").dxSwitch("instance").option("offText", e.value);
    }
})
//<!--/@jQuery-->
