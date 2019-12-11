var flag = false;
//<!--@Knockout-->
var myViewModel = {
    rangeSliderInstance: {},
    initializedHandler: function (e) {
        myViewModel.rangeSliderInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.rangeSliderInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New start: <b>' + e.start + '</b></br>' +
                                                                'New end: <b>' + e.end + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.rangeSliderInstance.off("valueChanged");
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
    $scope.rangeSliderInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.rangeSliderInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.rangeSliderInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New start: <b>' + e.start + '</b></br>' +
                                                                'New end: <b>' + e.end + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.rangeSliderInstance.off("valueChanged");
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
$("#myRangeSlider").dxRangeSlider({
    min: 50,
    max: 100,
    start: 65,
    end: 85
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myRangeSlider").dxRangeSlider("instance").on(
                "valueChanged", function (e) {
                    DevExpress.ui.dialog.alert('New start: <b>' + e.start + '</b></br>' +
                                                'New end: <b>' + e.end + '</b>', 'Info');
                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myRangeSlider").dxRangeSlider("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
