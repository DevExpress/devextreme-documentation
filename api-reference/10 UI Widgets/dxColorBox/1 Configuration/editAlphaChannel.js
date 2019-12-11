//<!--@Knockout-->
var myViewModel = {
    editAlpha: ko.observable(false),
    colorValue: ko.observable("#FF0000")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.editAlpha = false;
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
$("#editAlphaSelector").dxCheckBox({
    value: false,
    text: 'editAplhaChannel',
    onValueChanged: function (e) {
        $("#myColorBox").dxColorBox("instance").option("editAlphaChannel", e.value);
    }
});
$("#coloredText").css("color", $("#myColorBox").dxColorBox("instance").option("value"));
//<!--/@jQuery-->