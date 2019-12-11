//<!--@Knockout-->
var myViewModel = {
    tooltipEnabled: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tooltipEnabled = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlider").dxSlider({
    min: 1,
    max: 100,
    value: 38,
    tooltip: {
        showMode: 'always',
        enabled: false
    }
});
$("#tooltipSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("tooltip.enabled", e.value);
    }
})
//<!--/@jQuery-->