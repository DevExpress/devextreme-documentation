//<!--@Knockout-->
var myViewModel = {
    disabledValue: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.disabledValue = false;
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
    disabled: false
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#mySlider").dxSlider("instance").option("disabled", e.value);
    }
})
//<!--/@jQuery-->