var flag = false;
//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["Red", "Green", "Black"],
    togglePopover: function () {
        this.visible(!this.visible());
    },
    popoverInstance: {},
    onInitialized: function (e) {
        myViewModel.popoverInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.popoverInstance
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popover is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popover is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            myViewModel.popoverInstance
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
    $scope.colors = ["Red", "Green", "Black"];
    $scope.togglePopover = function () {
        $scope.visible = !$scope.visible;
    };
    $scope.popoverInstance = {};
    $scope.onInitialized = function (e) {
        $scope.popoverInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.popoverInstance
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popover is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popover is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $scope.popoverInstance
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
    }
});
$("#toggleButton").dxButton({
    text: 'Choose color',
    onClick: function () {
        $("#myPopover").dxPopover("instance").show();
    }
});
$("#button").dxButton({
    text: 'Subscribe to hidden and shown event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPopover").dxPopover("instance")
                .on("hidden", function (e) {
                    DevExpress.ui.notify("Popover is hidden", "error", 1000);
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.notify("Popover is shown", "success", 1000);
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $("#myPopover").dxPopover("instance")
                .off("hidden")
                .off("shown")
            e.component.option("text", "Subscribe to hidden and shown events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->