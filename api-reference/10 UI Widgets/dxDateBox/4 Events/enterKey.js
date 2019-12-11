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
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            myViewModel.dateBoxInstance.off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
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
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $scope.dateBoxInstance.off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
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
    text: 'Subscribe to EnterKey event',
    onClick: function (e) {
        if (flag === false) {
            $("#myDateBox").dxDateBox("instance").on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $("#myDateBox").dxDateBox("instance").off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->