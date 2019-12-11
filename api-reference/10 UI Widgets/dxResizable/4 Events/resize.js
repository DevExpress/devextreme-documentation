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
                    "resize", function (e) { DevExpress.ui.notify("Current width: " + e.width + ". Current height: " + e.height, "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from Resize event");
            flag = true;
        } else {
            myViewModel.resizableInstance.off("resize");
            e.component.option("text", "Subscribe to Resize event");
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
                    "resize", function (e) { DevExpress.ui.notify("Current width: " + e.width + ". Current height: " + e.height, "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from Resize event");
            flag = true;
        } else {
            $scope.resizableInstance.off("resize");
            e.component.option("text", "Subscribe to Resize event");
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
    text: 'Subscribe to Resize event',
    onClick: function (e) {
        if (flag === false) {
            $("#myResizable").dxResizable("instance")
                    .on(
                        "resize", function (e) { DevExpress.ui.notify("Current width: " + e.width + ". Current height: " + e.height, "success", 1500); }
                    );
            e.component.option("text", "Unsubscribe from Resize event");
            flag = true;
        } else {
            $("#myResizable").dxResizable("instance").off("resize");
            e.component.option("text", "Subscribe to Resize event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
