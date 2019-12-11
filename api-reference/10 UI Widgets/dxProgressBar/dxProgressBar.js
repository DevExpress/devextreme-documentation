//<!--@Knockout-->
var myViewModel = {
    clickCount: ko.observable(0),
    buttonText: ko.observable('Perform a step'),
    updateProgress: function () {
        if (this.buttonText() === "Reset progress") {
            this.clickCount(0);
            this.buttonText("Perform a step");
            return;
        }
        this.clickCount(this.clickCount() + 1);
        if(this.clickCount() === 10)
            this.buttonText("Reset progress");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.clickCount = 0;
    $scope.buttonText = 'Perform a step';
    $scope.updateProgress = function () {
        if ($scope.buttonText === "Reset progress") {
            $scope.clickCount = 0;
            $scope.buttonText = "Perform a step";
            return;
        }
        $scope.clickCount++;
        if ($scope.clickCount === 10)
            $scope.buttonText = "Reset progress";
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var clickCount = 0;
$("#myProgressBar").dxProgressBar({
    min: 0,
    max: 10,
    value: 0
});
$("#increaseProgressButton").dxButton({
    text: 'Perform a step',
    onClick: function () {
        if ($("#increaseProgressButton").dxButton("instance").option("text") === "Reset progress") {
            clickCount = 0;
            $("#myProgressBar").dxProgressBar("instance").option("value", clickCount);
            $("#increaseProgressButton").dxButton("instance").option("text", "Perform a step")
            return;
        }
        clickCount++;
        $("#myProgressBar").dxProgressBar("instance").option("value", clickCount);
        if(clickCount === 10)
            $("#increaseProgressButton").dxButton("instance").option("text", "Reset progress")
    }
});
//<!--/@jQuery-->
