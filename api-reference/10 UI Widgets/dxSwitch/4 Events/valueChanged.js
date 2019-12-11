var flag = false;
//<!--@Knockout-->
var myViewModel = {
    switchInstance: {},
    initializedHandler: function (e) {
        myViewModel.switchInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.switchInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.switchInstance.off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.switchInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.switchInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.switchInstance.on(
                "valueChanged", function (e) {
                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.switchInstance.off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#mySwitch").dxSwitch({
    value: false
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#mySwitch").dxSwitch("instance").on(
                "valueChanged", function (e) {
                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#mySwitch").dxSwitch("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->