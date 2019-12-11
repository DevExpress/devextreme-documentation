var flag = false;
//<!--@Knockout-->
var myViewModel = {
    sliderInstance: {},
    initializedHandler: function (e) {
        myViewModel.sliderInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.sliderInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.sliderInstance.off("valueChanged");
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
    $scope.sliderInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.sliderInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.sliderInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.sliderInstance.off("valueChanged");
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
$("#mySlider").dxSlider({
    min: 1,
    max: 99,
    value: 65
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#mySlider").dxSlider("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                                'Previous value: <b>' + e.previousValue + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#mySlider").dxSlider("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->