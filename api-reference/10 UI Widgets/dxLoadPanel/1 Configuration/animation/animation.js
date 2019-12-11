//<!--@Knockout-->
var myViewModel = {
    loadPanelVisible: ko.observable(false),
    animationTypes: ["fade", "pop", "slide"],
    animationConfig: ko.observable({}),
    startLoading: function () {
        this.loadPanelVisible(true);
        setTimeout($.proxy(this.finishLoading, this), 3000);
    },
    finishLoading: function () {
        this.loadPanelVisible(false);
    },
    typeChanged: function (e) {
        switch (e.value) {
            case "slide":
                this.animationConfig({
                    show: { type: "slide", from: { top: -200 }, to: { top: 200 } },
                    hide: { type: "slide", from: { top: 200 }, to: { top: -200 } }
                });
                break;
            case "pop":
                this.animationConfig({
                    show: { type: "pop", from: { scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                });
                break;
            case "fade":
                this.animationConfig({
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                });
                break;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.loadPanelVisible = false;
    $scope.animationTypes = ["fade", "pop", "slide"];
    $scope.animationConfig = {
        show: { type: "slide", from: { top: -200 }, to: { top: 200 } },
        hide: { type: "slide", from: { top: 200 }, to: { top: -200 } }
    };
    $scope.typeChanged = function (e) {
        switch (e.value) {
            case "slide":
                $scope.animationConfig = {
                    show: { type: "slide", from: { top: -200 }, to: { top: 200 } },
                    hide: { type: "slide", from: { top: 200 }, to: { top: -200 } }
                };
                break;
            case "pop":
                $scope.animationConfig = {
                    show: { type: "pop", from: { scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                };
                break;
            case "fade":
                $scope.animationConfig = {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                };
                break;
        }
    };
    $scope.startLoading = function () {
        $scope.loadPanelVisible = true;
        setTimeout(finishLoading, 3000);
    };
    finishLoading = function () {
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
    visible: false
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
$("#animationTypeSelector").dxSelectBox({
    dataSource: ["fade", "pop", "slide"],
    onValueChanged: function (e) {
        var animationConfig;
        switch (e.value) {
            case "slide":
                animationConfig = {
                    show: { type: "slide", from: { top: -200 }, to: { top: 200 } },
                    hide: { type: "slide", from: { top: 200 }, to: { top: -200 } }
                };
                break;
            case "pop":
                animationConfig = {
                    show: { type: "pop", from: { scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                };
                break;
            case "fade":
                animationConfig = {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                };
                break;
        }
        $("#myLoadPanel").dxLoadPanel("instance").option("animation", animationConfig);
    }
});
//<!--/@jQuery-->