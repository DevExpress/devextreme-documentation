//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    togglePopup: function () {
        this.visible(!this.visible());
    },
    popupShowing: function () {
        DevExpress.ui.notify("Popup is being shown now", "success", 1500);
    },
    popupHiding: function () {
        DevExpress.ui.notify("Popup is being hidden now", "error", 1500);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.visible = false;
    $scope.togglePopup = function () {
        $scope.visible = !$scope.visible;
    };
    $scope.popupShowing = function () {
        DevExpress.ui.notify("Popup is being shown now", "success", 1500);
    };
    $scope.popupHiding = function () {
        DevExpress.ui.notify("Popup is being hidden now", "error", 1500);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopup").dxPopup({
    height: 200,
    title: "My Popup",
    contentTemplate: function (contentElement) {
        contentElement.append("<p>The popup text.</p>");
        var closeButton = $("<div>");
        contentElement.append(closeButton);
        closeButton.dxButton({
            text: "Hide popup",
            onClick: function () {
                $("#myPopup").dxPopup("instance").hide();
            }
        })
    },
    onShowing: function () {
        DevExpress.ui.notify("Popup is being shown now", "success", 1500);
    },
    onHiding: function () {
        DevExpress.ui.notify("Popup is being hidden now", "error", 1500);
    }
});
$("#toggleButton").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#myPopup").dxPopup("instance").show();
    }
});
//<!--/@jQuery-->