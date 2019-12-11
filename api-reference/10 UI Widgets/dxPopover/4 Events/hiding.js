var canHidePopover = false;
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
            myViewModel.popoverInstance.on(
                "hiding", function (e) {
                    if (canHidePopover) {
                        canHidePopover = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Popover is hiding now. Continue?", "Confirm hiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHidePopover = true;
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from hiding event");
            flag = true;
        } else {
            myViewModel.popoverInstance.off("hiding");
            e.component.option("text", "Subscribe to hiding event");
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
            $scope.popoverInstance.on(
                "hiding", function (e) {
                    if (canHidePopover) {
                        canHidePopover = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Popover is hiding now. Continue?", "Confirm hiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHidePopover = true;
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from hiding event");
            flag = true;
        } else {
            $scope.popoverInstance.off("hiding");
            e.component.option("text", "Subscribe to hiding event");
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
    text: 'Subscribe to hiding event',
    onClick: function (e) {
        if (flag === false) {
            $("#myPopover").dxPopover("instance").on(
                "hiding", function (e) {
                    if (canHidePopover) {
                        canHidePopover = false;
                        return;
                    }
                    var result = DevExpress.ui.dialog.confirm("Popover is hiding now. Continue?", "Confirm hiding");
                    e.cancel = true;
                    result.done(function (dialogResult) {
                        if (!dialogResult)
                            return;
                        canHidePopover = true;
                        e.component.hide();
                    })
                }
            );
            e.component.option("text", "Unsubscribe from hiding event");
            flag = true;
        } else {
            $("#myPopover").dxPopover("instance").off("hiding");
            e.component.option("text", "Subscribe to hiding event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->