//<!--@Knockout-->
var myViewModel = {
    tooltipVisible: ko.observable(false),
    toggleTooltip: function () {
        this.tooltipVisible(!this.tooltipVisible());
    },
    animationTypes: [
        "fade",
        "pop",
        "slide"
    ],
    animationConfig: ko.observable({
        show: { type: "fade", from: 0, to: 1 },
        hide: { type: "fade", from: 1, to: 0 }
    }),
    typeChanged: function (e) {
        switch (e.value) {
            case "slide":
                this.animationConfig({
                    show: { type: "slide", from: { opacity: 1, top: -100 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -100 } }
                });
                break;
            case "pop":
                this.animationConfig({
                    show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                });
                break;
            case "fade":
                this.animationConfig({
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                });
                break;
            default:
                this.animationConfig({});
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tooltipVisible = false;
    $scope.toggleTooltip = function () {
        $scope.tooltipVisible = !$scope.tooltipVisible;
    },
    $scope.animationTypes = [
        "fade",
        "pop",
        "slide"
    ];
    $scope.animationConfig = {
        show: { type: "fade", from: 0, to: 1 },
        hide: { type: "fade", from: 1, to: 0 }
    };
    $scope.typeChanged = function (e) {
        switch (e.value) {
            case "slide":
                $scope.animationConfig = {
                    show: { type: "slide", from: { opacity: 1, top: -100 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -100 } }
                };
                break;
            case "pop":
                $scope.animationConfig = {
                    show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                };
                break;
            case "fade":
                $scope.animationConfig = {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                };
                break;
            default:
                $scope.animationConfig = {};
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTooltip").dxTooltip({
    target: "#button",
    contentTemplate: function (contentElement) {
        contentElement.append("<p>This is a button.</p>");
    },
    animation: {
        show: { type: "fade", from: 0, to: 1 },
        hide: { type: "fade", from: 1, to: 0 }
    }
});
$("#button").dxButton({
    text: 'Hover over me'
});
$("#button").mouseover(function () {
    $("#myTooltip").dxTooltip("instance").show();
});
$("#button").mouseout(function () {
    $("#myTooltip").dxTooltip("instance").hide();
});
$("#animationSelector").dxSelectBox({
    items: [
        "fade",
        "pop",
        "slide"
    ],
    value: 'fade',
    onValueChanged: function (e) {
        switch (e.value) {
            case "slide":
                $("#myTooltip").dxTooltip("instance").option("animation", {
                    show: { type: "slide", from: { opacity: 1, top: -100 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -100 } }
                });
                break;
            case "pop":
                $("#myTooltip").dxTooltip("instance").option("animation", {
                    show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                });
                break;
            case "fade":
                $("#myTooltip").dxTooltip("instance").option("animation", {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                });
                break;
            default:
                $("#myTooltip").dxTooltip("instance").option("animation", {});
        }
    }
});
//<!--/@jQuery-->
