//<!--@Knockout-->
var myViewModel = {
    enableActiveState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.enableActiveState = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySwitch").dxSwitch({
    activeStateEnabled: true
});
$("#activeStateSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#mySwitch").dxSwitch("instance").option("activeStateEnabled", e.value);
    }
})
//<!--/@jQuery-->
