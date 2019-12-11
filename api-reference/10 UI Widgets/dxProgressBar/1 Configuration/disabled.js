//<!--@Knockout-->
var performStep = function(){
    if (myViewModel.currentValue() == 100)
        return;
    myViewModel.currentValue(myViewModel.currentValue() + 1);
    setTimeout(performStep, 50);
}
var myViewModel = {
    progressBarDisabled: ko.observable(false),
    currentValue: ko.observable(0),
    start: function () {
        this.currentValue(0);
        performStep();
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
var performStep = function () {
    var progressBar = $("#myProgressBar").dxProgressBar("instance");
    if (progressBar.option("value") == 100)
        return;
    progressBar.option("value", progressBar.option("value") + 1);
    setTimeout(performStep, 50);
}
myApp.controller("demoController", function ($scope) {
    $scope.progressBarDisabled = false;
    $scope.start = function () {
        $("#myProgressBar").dxProgressBar("instance").option("value", 0);
        performStep();
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var performStep = function () {
    var progressBar = $("#myProgressBar").dxProgressBar("instance");
    if (progressBar.option("value") == 100)
        return;
    progressBar.option("value", progressBar.option("value") + 1);
    setTimeout(performStep, 50);
}
$("#myProgressBar").dxProgressBar({
    min: 0,
    max: 100,
    value: 0
});
$("#startButton").dxButton({
    text: 'Start',
    onClick: function () {
        $("#myProgressBar").dxProgressBar("instance").option("value", 0);
        performStep();
    }
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myProgressBar").dxProgressBar("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
