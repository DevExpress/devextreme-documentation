//<!--@Knockout-->
var myViewModel = {
    switchValue: ko.observable(false),
    changeValue: function () {
        this.switchValue(!this.switchValue());
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.switchValue = false;
    $scope.changeValue = function () {
        $scope.switchValue = !$scope.switchValue;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySwitch").dxSwitch({
    value: false
});
$("#changeValueButton").dxButton({
    text: 'Change value',
    onClick: function(){
        var currentValue = $("#mySwitch").dxSwitch("instance").option("value");
        $("#mySwitch").dxSwitch("instance").option("value", !currentValue);
    }
})
//<!--/@jQuery-->
