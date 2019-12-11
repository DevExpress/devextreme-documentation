//<!--@Knockout-->
var myViewModel = {
    switchValue: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.switchValue = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySwitch").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#switchValue").text(e.value);
    }
});
$("#switchValue").text($("#mySwitch").dxSwitch("instance").option("value"));
//<!--/@jQuery-->
