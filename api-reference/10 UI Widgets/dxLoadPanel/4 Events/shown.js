//<!--@Knockout-->
var myViewModel = {
    loadPanelVisible: ko.observable(false),
    startLoading: function () {
        this.loadPanelVisible(true);
        setTimeout($.proxy(this.finishLoading, this), 3000);
    },
    finishLoading: function () {
        this.loadPanelVisible(false);
    },
    initializedHandler: function (e) {
        e.component.on("shown", function () { DevExpress.ui.notify("Load panel is shown", "success", 1500); })
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.contextMenuInstance = {};
    $scope.initializedHandler = function (e) {
        e.component.on("shown", function () { DevExpress.ui.notify("Load panel is shown", "success", 1500); });
    };
    var finishLoading = function () {
        $("#myLoadPanel").dxLoadPanel("instance").option("visible", false);
    };
    $scope.startLoading = function () {
        $scope.loadPanelVisible = true;
        setTimeout(finishLoading, 3000);
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
    onInitialized: function (e) {
        e.component.on("shown", function () { DevExpress.ui.notify("Load panel is shown", "success", 1500); })
    }
});
$("#loadButton").dxButton({
    text: 'Load',
    onClick: function () {
        $("#myLoadPanel").dxLoadPanel("instance").option("visible", true);
        setTimeout($.proxy(finishLoading, this), 3000);
    }
});
var finishLoading = function () {
    $("#myLoadPanel").dxLoadPanel("instance").option("visible", false);
}
//<!--/@jQuery-->