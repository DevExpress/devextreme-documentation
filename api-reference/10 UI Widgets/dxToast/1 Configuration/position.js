
//<!--@Knockout-->
var myViewModel = {
    atValue: ko.observable("bottom"),
    myValue: ko.observable("bottom"),
    offsetValue: ko.observable("0 0"),
    toastVisible: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    },
    positionValues: [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.atValue = "bottom";
    $scope.myValue = "bottom";
    $scope.offsetValue = "0 0";
    $scope.toastVisible = false;
    $scope.showToast = function () {
        $scope.toastVisible = true;
    };
    $scope.positionValues = [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    position: {
        my: 'bottom',
        at: 'bottom',
        of: $("#targetElement"),
        offset: "0 0"
    }
});
$("#showButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
$("#mySelector").dxSelectBox({
    items: [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
    ],
    value: 'bottom',
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("position.my", e.value);
    }
});
$("#atSelector").dxSelectBox({
    items: [
        "left top",
        "top",
        "right top",
        "right",
        "right bottom",
        "bottom",
        "left bottom",
        "left",
        "center"
    ],
    value: 'bottom',
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("position.at", e.value);
    }
});
$("#offsetSelector").dxTextBox({
    value: "0 0",
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("position.offset", e.value);
    }
});
//<!--/@jQuery-->
