//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["Red", "Green", "Black"],
    togglePopover: function () {
        this.visible(!this.visible());
    },
    animationTypes: ["pop", "fade", "slide"],
    animationConfig: ko.observable({
        show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
        hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
    }),
    adjustAnimation: function (e) {
        switch (e.value) {
            case "slide":
                this.animationConfig({
                    show: { type: "slide", from: { opacity: 1, top: -200 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -200 } }
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
                animationConfig({});
                break;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.visible = false;
    $scope.colors = ["Red", "Green", "Black"];
    $scope.togglePopover = function () {
        $scope.visible = !$scope.visible;
    };
    $scope.animationTypes = ["pop", "fade", "slide"];
    $scope.animationConfig = {
        show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
        hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
    };
    $scope.adjustAnimation = function (e) {
        switch (e.value) {
            case "slide":
                $scope.animationConfig = {
                    show: { type: "slide", from: { opacity: 1, top: -200 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -200 } }
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
                animationConfig = {};
                break;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopover").dxPopover({
    width: 200,
    height: 'auto',
    target: '#toggleButton',
    contentTemplate: function (contentElement) {
        var list = $("<div>");
        contentElement.append(list);
        list.dxList({
            dataSource: ["Red", "Green", "Black"],
            onItemClick: function () {
                $("#myPopover").dxPopover("instance").hide();
            }
        })
    },
    animation: {
        show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
        hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
    }
});
$("#toggleButton").dxButton({
    text: 'Choose color',
    onClick: function () {
        $("#myPopover").dxPopover("instance").show();
    }
});
$("#animationSelector").dxSelectBox({
    items: ["pop", "fade", "slide"],
    value: "pop",
    onValueChanged: function (e) {
        switch (e.value) {
            case "slide":
                $("#myPopover").dxPopover("instance").option("animation", {
                    show: { type: "slide", from: { opacity: 1, top: -200 }, to: { top: 0 } },
                    hide: { type: "slide", from: { top: 0 }, to: { top: -200 } }
                });
                break;
            case "pop":
                $("#myPopover").dxPopover("instance").option("animation", {
                    show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                });
                break;
            case "fade":
                $("#myPopover").dxPopover("instance").option("animation", {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                });
                break;
            default:
                $("#myPopover").dxPopover("instance").option("animation", {});
                break;
        }
    }
});
//<!--/@jQuery-->