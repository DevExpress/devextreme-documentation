//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["Red", "Green", "Black"],
    togglePopover: function () {
        this.visible(!this.visible());
    },
    popoverShowing: function () {
        DevExpress.ui.notify("Popover is being shown now", "success");
    },
    popoverHiding: function () {
        DevExpress.ui.notify("Popover is being hidden now", "error");
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
    $scope.popoverShowing = function () {
        DevExpress.ui.notify("Popover is being shown now", "success");
    };
    $scope.popoverHiding = function () {
        DevExpress.ui.notify("Popover is being hidden now", "error");
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
    onShowing: function () {
        DevExpress.ui.notify("Popover is being shown now", "success");
    },
    onHiding: function () {
        DevExpress.ui.notify("Popover is being hidden now", "error");
    }
});
$("#toggleButton").dxButton({
    text: 'Choose color',
    onClick: function () {
        $("#myPopover").dxPopover("instance").show();
    }
});
//<!--/@jQuery-->