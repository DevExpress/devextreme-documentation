var flag = false;
//<!--@Knockout-->
var myViewModel = {
    colorBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.colorBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.colorBoxInstance.on(
                "closed", function (e) {
                    DevExpress.ui.notify("The drop-down list has been closed", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            myViewModel.colorBoxInstance.off("closed");
            e.component.option("text", "Subscribe to Closed event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.colorBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.colorBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.colorBoxInstance.on(
                "closed", function (e) {
                    DevExpress.ui.notify("The drop-down list has been closed", "success", 1000);
                }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            $scope.colorBoxInstance.off("closed");
            e.component.option("text", "Subscribe to Closed event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myColorBox").dxColorBox({
    value: '#FF0000',
});
$("#button").dxButton({
    text: 'Subscribe to Closed event',
    onClick: function (e) {
        if (flag === false) {
            $("#myColorBox").dxColorBox("instance").on(
                "closed", function (e) { DevExpress.ui.notify("The drop-down list has been closed", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            $("#myColorBox").dxColorBox("instance").off("closed");
            e.component.option("text", "Subscribe to Closed event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->