//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    toggleTooltip: function () {
        this.tooltipVisible(!this.tooltipVisible());
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tooltipVisible = false;
    $scope.toggleTooltip = function () {
        $scope.tooltipVisible = !$scope.tooltipVisible;
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
        contentElement.append("<p>This is a button.</p>");
    }
});
$("#button").dxButton({
    text: 'Hover over me'
});
$("#button").mouseover(function () {
    $("#myTooltip").dxTooltip("instance").show();
});
$("#button").mouseout(function () {
    $("#myTooltip").dxTooltip("instance").hide();
});
//<!--/@jQuery-->
