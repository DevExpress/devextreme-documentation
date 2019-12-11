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
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            myViewModel.dateBoxInstance.off("valueChanged");
            e.component.option("text", "Subscribe to valueChanged event");
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
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            $scope.dateBoxInstance.off("valueChanged");
            e.component.option("text", "Subscribe to valueChanged event");
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
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myDateBox").dxDateBox("instance").on(
                "valueChanged", function (e) {
                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                'New value: <b>' + e.value + '</b>', 'Info');
                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myDateBox").dxDateBox("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->