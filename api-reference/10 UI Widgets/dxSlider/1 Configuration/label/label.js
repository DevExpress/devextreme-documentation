//<!--@Knockout-->
var myViewModel = {
    labelVisible: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.labelVisible = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySlider").dxSlider({
    min: 0,
    max: 100,
    value: 38,
    label: {
        visible: false
    }
});
$("#labelSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("label.visible", e.value);
    }
})
//<!--/@jQuery-->