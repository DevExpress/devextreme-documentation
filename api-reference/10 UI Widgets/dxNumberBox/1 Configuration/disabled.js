//<!--@Knockout-->
var myViewModel = {
    numberBoxDisabled: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.numberBoxDisabled = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myNumberBox").dxNumberBox("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
