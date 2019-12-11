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
                "opened", function (e) {
                            DevExpress.ui.notify("The drop-down list is opened", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            myViewModel.colorBoxInstance.off("opened");
            e.component.option("text", "Subscribe to Opened event");
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
                "opened", function (e) {
                            DevExpress.ui.notify("The drop-down list is opened", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $scope.colorBoxInstance.off("opened");
            e.component.option("text", "Subscribe to Opened event");
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
    value: '#FF0000'
});
$("#button").dxButton({
    text: 'Subscribe to Opened event',
    onClick: function (e) {
        if (flag === false) {
            $("#myColorBox").dxColorBox("instance").on(
                "opened", function (e) { DevExpress.ui.notify("The drop-down list is opened", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $("#myColorBox").dxColorBox("instance").off("opened");
            e.component.option("text", "Subscribe to Opened event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->