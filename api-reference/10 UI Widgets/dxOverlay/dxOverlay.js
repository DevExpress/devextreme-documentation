//<!--@Knockout-->
var myViewModel = {
    overlayVisible: ko.observable(false),
    showOverlay: function () {
        this.overlayVisible(true);
    },
    hideOverlay: function () {
        this.overlayVisible(false);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.overlayVisible = false;
    $scope.showOverlay = function () {
        $scope.overlayVisible = true;
    };
    $scope.hideOverlay = function () {
        $scope.overlayVisible = false;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myOverlay").dxOverlay({
    closeOnOutsideClick: true,
    onShown: function () {
        $("#hideButton").dxButton({
            text: 'Hide overlay',
            onClick: function () {
                $("#myOverlay").dxOverlay("instance").hide();
            }
        });
    },
    contentTemplate: function (contentElement) {
        contentElement.addClass('overlayContent');
        contentElement.append("<p>The overlay window text.</p>");
        contentElement.append('<div class="button" id="hideButton">');
    }
});
$("#showButton").dxButton({
    text: 'Show overlay',
    onClick: function () {
        $("#myOverlay").dxOverlay("instance").show();
    }
});
//<!--/@jQuery-->
