//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    customToastVisible: ko.observable(false),
    showToast: function () {
        if (this.currentType() == 'custom')
            this.customToastVisible(true);
        else
            this.toastVisible(true);
    },
    toastTypes: [
        "info",
        "warning",
        "error",
        "success",
        "custom"
    ],
    currentType: ko.observable("info")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toastVisible = false;
    $scope.customToastVisible = false;
    $scope.showToast = function () {
        if ($scope.currentType == 'custom')
            $scope.customToastVisible = true;
        else
            $scope.toastVisible = true;
    };
    $scope.toastTypes = [
        "info",
        "warning",
        "error",
        "success",
        "custom"
    ];
    $scope.currentType = "info";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var currentType = 'info';
$("#myToast").dxToast({
    message: 'Toast message',
    type: 'info',
    displayTime: 3000
});
$("#myCustomToast").dxToast({
    type: 'custom',
    displayTime: 3000
});
$("#typeSelector").dxSelectBox({
    items: [
        "info",
        "warning",
        "error",
        "success",
        "custom"
    ],
    value: 'info',
    onValueChanged: function (e) {
        currentType = e.value;
        if (currentType !== 'custom')
            $("#myToast").dxToast("instance").option("type", e.value);
    }
});
$("#showButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        if (currentType === 'custom')
            $("#myCustomToast").dxToast("instance").show();
        else
            $("#myToast").dxToast("instance").show();
    }
});
//<!--/@jQuery-->

