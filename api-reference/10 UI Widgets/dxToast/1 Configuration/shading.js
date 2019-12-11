//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    shadeScreen: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toastVisible = false;
    $scope.shadeScreen = false;
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
    shading: false
});
$("#showToastButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
$("#shadingSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("shading", e.value);
    }
});
//<!--/@jQuery-->
