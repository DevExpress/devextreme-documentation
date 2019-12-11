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
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popup is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popup is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            myViewModel.popupInstance
                .off("hidden")
                .off("shown");
            e.component.option("text", "Subscribe to hidden and shown events");
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
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popup is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popup is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $scope.popupInstance
                .off("hidden")
                .off("shown");
            e.component.option("text", "Subscribe to hidden and shown events");
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
    text: 'Subscribe to hidden and shown event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPopup").dxPopup("instance")
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popup is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popup is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $("#myPopup").dxPopup("instance")
                .off("hidden")
                .off("shown")
            e.component.option("text", "Subscribe to hidden and shown events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->