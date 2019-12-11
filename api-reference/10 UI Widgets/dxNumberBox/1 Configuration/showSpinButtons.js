//<!--@Knockout-->
var myViewModel = {
    spinButtonsVisible: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.spinButtonsVisible = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    step: 5,
    showSpinButtons: true
});
$("#showButtonsSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myNumberBox").dxNumberBox("instance").option("showSpinButtons", e.value);
    }
});
//<!--/@jQuery-->
