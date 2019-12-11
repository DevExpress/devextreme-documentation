//<!--@Knockout-->
var myViewModel = {
    showControls: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.showControls = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMap").dxMap({
    controls: false
});
$("#controlsSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myMap").dxMap("instance").option("controls", e.value);
    }
});
//<!--/@jQuery-->