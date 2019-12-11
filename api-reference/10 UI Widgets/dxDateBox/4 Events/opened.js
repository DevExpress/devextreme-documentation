var flag = false;
//<!--@Knockout-->
var myViewModel = {
    dateBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.dateBoxInstance = e.component;
    },
    currentDate: new Date(),
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.dateBoxInstance.on(
                "opened", function (e) {
                            DevExpress.ui.notify("The picker is opened", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            myViewModel.dateBoxInstance.off("opened");
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
    $scope.dateBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.dateBoxInstance = e.component;
    };
    $scope.currentDate = new Date();
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.dateBoxInstance.on(
                "opened", function (e) {
                            DevExpress.ui.notify("The picker is opened", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $scope.dateBoxInstance.off("opened");
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
$("#myDateBox").dxDateBox({
    value: new Date()
});
$("#button").dxButton({
    text: 'Subscribe to Opened event',
    onClick: function (e) {
        if (flag === false) {
            $("#myDateBox").dxDateBox("instance").on(
                "opened", function (e) { DevExpress.ui.notify("The picker is opened", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Opened event");
            flag = true;
        } else {
            $("#myDateBox").dxDateBox("instance").off("opened");
            e.component.option("text", "Subscribe to Opened event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->