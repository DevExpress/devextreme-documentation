//<!--@Knockout-->
var myViewModel = {
    applyText: ko.observable("OK"),
    cancelText: ko.observable("Cancel"),
    colorValue: ko.observable("#FF0000")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.applyText = "OK";
    $scope.cancelText = "Cancel";
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
$("#applyTextField").dxTextBox({
    value: "OK",
    onValueChanged: function(e){
        $("#myColorBox").dxColorBox("instance").option("applyButtonText", e.value);
    }
});
$("#cancelTextField").dxTextBox({
    value: "Cancel",
    onValueChanged: function(e){
        $("#myColorBox").dxColorBox("instance").option("cancelButtonText", e.value);
    }
});
$("#coloredText").css("color", $("#myColorBox").dxColorBox("instance").option("value"));
//<!--/@jQuery-->