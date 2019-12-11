//<!--@Knockout-->
var myViewModel = {
    displayTimeValue: ko.observable(2000),
    toastVisible: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.displayTimeValue = 2000;
    $scope.toastVisible = false;
    $scope.showToast = function () {
        $scope.toastVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    displayTime: 2000
});
$("#showButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
$("#displayTimeSlider").dxSlider({
    min: 0,
    max: 5000,
    value: 2000,
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("displayTime", e.value);
        $("#displayTimeValue").text(e.value);
    }
});
//<!--/@jQuery-->
