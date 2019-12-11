//<!--@Knockout-->
var myViewModel = {
    handlesValue: ko.observable("bottom right"),
    tooltipVisible: ko.observable(false),
    showTooltip: function () {
        this.tooltipVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.handlesValue = "bottom right";
    $scope.tooltipVisible = false;
    $scope.showTooltip = function () {
        $scope.tooltipVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#handlesTooltip").dxTooltip({
    target: '#handles'
});
$("#handles").on("dxhoverstart", function () {
    $("#handlesTooltip").dxTooltip("instance").show();
});
$("#handlesTextBox").dxTextBox({
    value: "right bottom",
    onValueChanged: function (e) {
        $("#myResizable").dxResizable("instance").option("handles", e.value);
    }
});
$("#myResizable").dxResizable({
    handles: "right bottom",
    minHeight: 100,
    minWidth: 200,
    maxHeight: 400,
    maxWidth: 300,
    width: 200,
    height: 100
});
//<!--/@jQuery-->
