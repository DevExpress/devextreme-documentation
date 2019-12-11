//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    currentTemplate: ko.observable('brief'),
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
    $scope.currentTemplate = 'brief';
    $scope.toggleTooltip = function () {
        $scope.tooltipVisible = !$scope.tooltipVisible;
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var briefTemplate = function (contentElement) {
    contentElement.append("<p>This is a button.</p>");
}
var fullTemplate = function (contentElement) {
    contentElement.append("<p>This is a button.</p>");
    contentElement.append("<p><i>It is a target widget for the current tooltip.</i></p>");
}
$("#myTooltip").dxTooltip({
    target: "#button",
    contentTemplate: briefTemplate
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
$("#templateSelector").dxSelectBox({
    items: ['brief', 'full'],
    value: 'brief',
    onValueChanged: function (e) {
        if(e.value === 'full')
            $("#myTooltip").dxTooltip("instance").option("contentTemplate", fullTemplate);
        else
            $("#myTooltip").dxTooltip("instance").option("contentTemplate", briefTemplate);
    }
});
//<!--/@jQuery-->
