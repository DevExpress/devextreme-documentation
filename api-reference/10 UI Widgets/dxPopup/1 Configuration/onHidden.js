//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    togglePopup: function () {
        this.visible(!this.visible());
    },
    popupShown: function () {
        DevExpress.ui.notify("Popup is shown", "success", 1500);
    },
    popupHidden: function () {
        DevExpress.ui.notify("Popup is hidden", "error", 1500);
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
    $scope.popupShown = function () {
        DevExpress.ui.notify("Popup is shown", "success", 1500);
    };
    $scope.popupHidden = function () {
        DevExpress.ui.notify("Popup is hidden", "error", 1500);
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
    onShown: function () {
        DevExpress.ui.notify("Popup is shown", "success", 1500);
    },
    onHidden: function () {
        DevExpress.ui.notify("Popup is hidden", "error", 1500);
    }
});
$("#toggleButton").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#myPopup").dxPopup("instance").show();
    }
});
//<!--/@jQuery-->