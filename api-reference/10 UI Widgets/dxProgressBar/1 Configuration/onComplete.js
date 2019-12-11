//<!--@Knockout-->
var performStep = function () {
    if (myViewModel.currentValue() == 10)
        return;
    myViewModel.currentValue(myViewModel.currentValue() + 1);
    setTimeout(performStep, 200);
}
var myViewModel = {
    progressBarDisabled: ko.observable(false),
    currentValue: ko.observable(0),
    start: function () {
        this.currentValue(0);
        performStep();
    },
    complete: function () {
        DevExpress.ui.dialog.alert("Complete");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
var performStep = function () {
    var progressBar = $("#myProgressBar").dxProgressBar("instance");
    if (progressBar.option("value") == 10)
        return;
    progressBar.option("value", progressBar.option("value") + 1);
    setTimeout(performStep, 200);
}
myApp.controller("demoController", function ($scope) {
    $scope.progressBarDisabled = false;
    $scope.start = function () {
        $("#myProgressBar").dxProgressBar("instance").option("value", 0);
        performStep();
    };
    $scope.complete = function () {
        DevExpress.ui.dialog.alert("Complete");
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var performStep = function () {
    var progressBar = $("#myProgressBar").dxProgressBar("instance");
    if (progressBar.option("value") == 10)
        return;
    progressBar.option("value", progressBar.option("value") + 1);
    setTimeout(performStep, 200);
}
$("#myProgressBar").dxProgressBar({
    min: 0,
    max: 10,
    value: 0,
    onComplete: function () {
        DevExpress.ui.dialog.alert("Complete");
    }
});
$("#startButton").dxButton({
    text: 'Start',
    onClick: function () {
        $("#myProgressBar").dxProgressBar("instance").option("value", 0);
        performStep();
    }
});
//<!--/@jQuery-->
