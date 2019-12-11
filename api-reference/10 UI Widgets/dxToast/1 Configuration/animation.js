//<!--@Knockout-->
var myViewModel = {
    animationTypes: [
        "fade",
        "pop",
        "slide"
    ],
    toastVisible: ko.observable(false),
    animationConfig: ko.observable({}),
    typeChanged: function (e) {
        switch (e.value) {
            case "slide":
                this.animationConfig({
                    show: { type: "slide", from: { opacity: 1, top: $(window).height() }, to: { top: $(window).height() - 100 } },
                    hide: { type: "slide", from: { top: $(window).height() - 100 }, to: { top: $(window).height() } }
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
    },
    showToast: function () {
        this.toastVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.animationTypes = [
        "fade",
        "pop",
        "slide"
    ];
    $scope.toastVisible = false;
    $scope.animationConfig = {};
    $scope.typeChanged = function (e) {
        switch (e.value) {
            case "slide":
                $scope.animationConfig = {
                    show: { type: "slide", from: { opacity: 1, top: $(window).height() }, to: { top: $(window).height() - 100 } },
                    hide: { type: "slide", from: { top: $(window).height() - 100 }, to: { top: $(window).height() } }
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
    $scope.showToast = function () {
        $scope.toastVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    animation: {
        show: { type: "fade", from: 0, to: 1 },
        hide: { type: "fade", from: 1, to: 0 }
    }
});
$("#showButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
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
                $("#myToast").dxToast("instance").option("animation", {
                    show: { type: "slide", from: { opacity: 1, top: $(window).height() }, to: { top: $(window).height() - 100 } },
                    hide: { type: "slide", from: { top: $(window).height() - 100 }, to: { top: $(window).height() } }
                });
                break;
            case "pop":
                $("#myToast").dxToast("instance").option("animation", {
                    show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                    hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
                });
                break;
            case "fade":
                $("#myToast").dxToast("instance").option("animation", {
                    show: { type: "fade", from: 0, to: 1 },
                    hide: { type: "fade", from: 1, to: 0 }
                });
                break;
            default:
                $("#myToast").dxToast("instance").option("animation", {});
        }
    }
});
//<!--/@jQuery-->

