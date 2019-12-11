//<!--@Knockout-->
var myViewModel = {
    loadPanelVisible: ko.observable(false),
    delayValue: ko.observable(0),
    startLoading: function () {
        this.loadPanelVisible(true);
        setTimeout($.proxy(this.finishLoading, this), 3000);
    },
    finishLoading: function () {
        this.loadPanelVisible(false);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.loadPanelVisible = false,
    $scope.delayValue = 0,
    $scope.startLoading = function () {
        $scope.loadPanelVisible = true;
        setTimeout(finishLoading, 3000);
    };
    var finishLoading = function () {
        $("#myLoadPanel").dxLoadPanel("instance").option("visible", false);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myLoadPanel").dxLoadPanel({
    message: 'Loading...',
    visible: false,
    delay: 0
});
$("#loadButton").dxButton({
    text: 'Load',
    onClick: function () {
        $("#myLoadPanel").dxLoadPanel("instance").show();
        setTimeout($.proxy(finishLoading, this), 3000);
    }
});
var finishLoading = function () {
    $("#myLoadPanel").dxLoadPanel("instance").hide();
}
$("#delayField").dxNumberBox({
    min: 0,
    max: 2000,
    step: 100,
    showSpinButtons: true,
    value: 0,
    onValueChanged: function (e) {
        $("#myLoadPanel").dxLoadPanel("instance").option("delay", e.value);
    }
});
//<!--/@jQuery-->