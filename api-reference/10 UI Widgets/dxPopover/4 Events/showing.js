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
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popover is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing events");
            flag = true;
        } else {
            myViewModel.popoverInstance
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
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popover is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $scope.popoverInstance
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
    text: 'Subscribe to Showing event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPopover").dxPopover("instance")
                .on("showing", function (e) {
                    DevExpress.ui.notify("Popover is being shown now", "success");
                }
                );
            e.component.option("text", "Unsubscribe from Showing event");
            flag = true;
        } else {
            $("#myPopover").dxPopover("instance")
                .off("showing")
            e.component.option("text", "Subscribe to Showing event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->