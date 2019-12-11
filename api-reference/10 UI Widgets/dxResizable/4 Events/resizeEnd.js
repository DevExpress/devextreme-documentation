var flag = false;
//<!--@Knockout-->
var myViewModel = {
    resizableInstance: {},
    initializedHandler: function (e) {
        myViewModel.resizableInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.resizableInstance
                .on(
                    "resizeEnd", function (e) { DevExpress.ui.notify("Resize ended", "error", 1500); }
                )
                .on(
                    "resizeStart", function (e) { DevExpress.ui.notify("Resize started", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ResizeEnd and ResizeStart events");
            flag = true;
        } else {
            myViewModel.resizableInstance
                .off("resizeStart")
                .off("resizeEnd");
            e.component.option("text", "Subscribe to ResizeEnd and ResizeStart events");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.resizableInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.resizableInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.resizableInstance
                .on(
                    "resizeEnd", function (e) { DevExpress.ui.notify("Resize ended", "error", 1500); }
                )
                .on(
                    "resizeStart", function (e) { DevExpress.ui.notify("Resize started", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ResizeEnd and ResizeStart events");
            flag = true;
        } else {
            $scope.resizableInstance
                    .off("resizeEnd")
                    .off("resizeStart");
            e.component.option("text", "Subscribe to ResizeEnd and ResizeStart events");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myResizable").dxResizable({
    direction: 'right bottom',
    minHeight: 100,
    minWidth: 200,
    maxHeight: 400,
    maxWidth: 300,
    width: 200,
    height: 100
});
$("#button").dxButton({
    text: 'Subscribe to ResizeEnd and ResizeStart events',
    onClick: function (e) {
        if (flag === false) {
            $("#myResizable").dxResizable("instance")
                    .on(
                        "resizeEnd", function (e) { DevExpress.ui.notify("Resize ended", "error", 1500); }
                    )
                    .on(
                        "resizeStart", function (e) { DevExpress.ui.notify("Resize started", "success", 1500); }
                    );
            e.component.option("text", "Unsubscribe from ResizeEnd and ResizeStart events");
            flag = true;
        } else {
            $("#myResizable").dxResizable("instance")
                .off("resizeEnd")
                .off("resizeStart");
            e.component.option("text", "Subscribe to ResizeEnd and ResizeStart events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
