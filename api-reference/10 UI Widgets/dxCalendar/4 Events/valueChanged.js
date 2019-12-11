var flag = false;
//<!--@Knockout-->
var myViewModel = {
    calendarInstance: {},
    onInitialized: function (e) {
        myViewModel.calendarInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.calendarInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.calendarInstance.off("valueChanged");
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
    $scope.calendarInstance = {};
    $scope.onInitialized = function (e) {
        $scope.calendarInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.calendarInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.calendarInstance.off("valueChanged");
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
$("#myCalendar").dxCalendar({});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myCalendar").dxCalendar("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myCalendar").dxCalendar("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->