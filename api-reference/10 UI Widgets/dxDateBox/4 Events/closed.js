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
                "closed", function (e) {
                            DevExpress.ui.notify("The picker has been closed", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            myViewModel.dateBoxInstance.off("closed");
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
    $scope.dateBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.dateBoxInstance = e.component;
    };
    $scope.currentDate = new Date();
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.dateBoxInstance.on(
                "closed", function (e) {
                            DevExpress.ui.notify("The picker has been closed", "success", 1000);
                        }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            $scope.dateBoxInstance.off("closed");
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
$("#myDateBox").dxDateBox({
    value: new Date(),
});
$("#button").dxButton({
    text: 'Subscribe to Closed event',
    onClick: function (e) {
        if (flag === false) {
            $("#myDateBox").dxDateBox("instance").on(
                "closed", function (e) { DevExpress.ui.notify("The picker has been closed", "success", 1000); }
            );
            e.component.option("text", "Unsubscribe from Closed event");
            flag = true;
        } else {
            $("#myDateBox").dxDateBox("instance").off("closed");
            e.component.option("text", "Subscribe to Closed event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->