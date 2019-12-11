//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    currentPosition: ko.observable('bottom'),
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
    $scope.currentPosition = 'bottom',
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
    position: 'bottom',
    contentTemplate: function (contentElement) {
        contentElement.append("<p>Button</p>");
    }
});
$("#button").dxButton({
    text: 'Button'
});
$("#button").mouseover(function () {
    $("#myTooltip").dxTooltip("instance").show();
});
$("#button").mouseout(function () {
    $("#myTooltip").dxTooltip("instance").hide();
});
$("#positionSelector").dxSelectBox({
    items: ['top', 'bottom', 'left', 'right'],
    value: 'bottom',
    onValueChanged: function (e) {
        $("#myTooltip").dxTooltip("instance").option("position", e.value);
    }
});
//<!--/@jQuery-->
