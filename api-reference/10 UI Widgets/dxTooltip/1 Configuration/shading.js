//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    shadeScreen: ko.observable(false),
    showTooltip: function () {
        this.tooltipVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tooltipVisible = false;
    $scope.shadeScreen = false;
    $scope.showTooltip = function () {
        $scope.tooltipVisible = true;
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTooltip").dxTooltip({
    target: "#button",
    contentTemplate: function (contentElement) {
        contentElement.append("<p>Click outside to close.</p>");
    }
});
$("#button").dxButton({
    text: 'Hover over me'
});
$("#button").mouseover(function () {
    $("#myTooltip").dxTooltip("instance").show();
});
$("#shadingSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTooltip").dxTooltip("instance").option("shading", e.value);
    }
});
//<!--/@jQuery-->
