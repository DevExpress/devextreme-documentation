var flag = false;
//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    togglePopup: function () {
        this.visible(!this.visible());
    },
    popupInstance: {},
    onInitialized: function (e) {
        myViewModel.popupInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.popupInstance
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popup is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing events");
            flag = true;
        } else {
            myViewModel.popupInstance
                .off("showing");
            e.component.option("text", "Subscribe to Showing events");
            flag = false;
        }
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
    $scope.popupInstance = {};
    $scope.onInitialized = function (e) {
        $scope.popupInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.popupInstance
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popup is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $scope.popupInstance
                .off("showing");
            e.component.option("text", "Subscribe to Showing event");
            flag = false;
        }
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
    dragEnabled: false,
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
    }
});
$("#toggleButton").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#myPopup").dxPopup("instance").show();
    }
});
$("#button").dxButton({
    text: 'Subscribe to Showing event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPopup").dxPopup("instance")
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popup is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $("#myPopup").dxPopup("instance")
                .off("showing")
            e.component.option("text", "Subscribe to Showing event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->