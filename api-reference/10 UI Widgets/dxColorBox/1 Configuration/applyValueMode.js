//<!--@Knockout-->
var myViewModel = {
    applyMode: ko.observable("useButtons"),
    applyModes: ["useButtons", "instantly"],
    colorValue: ko.observable("#FF0000")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.applyMode = "useButtons";
    $scope.applyModes = ["useButtons", "instantly"];
    $scope.colorValue = "#FF0000";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myColorBox").dxColorBox({
    value: "#FF0000",
    onValueChanged: function (e) {
        $("#coloredText").css("color", e.value);
    }
});
$("#modeSelector").dxSelectBox({
    value: "useButtons",
    dataSource: ["useButtons", "instantly"],
    onValueChanged: function (e) {
        $("#myColorBox").dxColorBox("instance").option("applyValueMode", e.value);
    }
});
$("#coloredText").css("color", $("#myColorBox").dxColorBox("instance").option("value"));
//<!--/@jQuery-->