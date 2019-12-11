var flag = false;
//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    toggleTooltip: function () {
        this.tooltipVisible(!this.tooltipVisible());
    },
    initializedHandler: function (e) {
        e.component
            .on("hiding", function (e) {
                DevExpress.ui.notify("The widget is being hidden", "error", 1500); }
            )
            .on("showing", function (e) {
                DevExpress.ui.notify("The widget is being shown", "success", 1500); }
            );
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
    $scope.initializedHandler = function (e) {
        e.component
            .on("hiding", function (e) {
                DevExpress.ui.notify("The widget is being hidden", "error", 1500); }
            )
            .on("showing", function (e) {
                DevExpress.ui.notify("The widget is being shown", "success", 1500); }
            );
    };
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
    },
    onInitialized: function (e) {
        e.component
            .on("hiding", function (e) {
                DevExpress.ui.notify("The widget is being hidden", "error", 1500); }
            )
            .on("showing", function (e) {
                DevExpress.ui.notify("The widget is being shown", "success", 1500); }
            );
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