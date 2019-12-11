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
$("#mySwitch").dxSwitch();
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#mySwitch").dxSwitch("instance").option("disabled", e.value);
    }
})
//<!--/@jQuery-->
