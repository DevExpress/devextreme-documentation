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
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                               'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            myViewModel.colorBoxInstance.off("valueChanged");
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
    $scope.colorBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.colorBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.colorBoxInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            $scope.colorBoxInstance.off("valueChanged");
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
$("#myColorBox").dxColorBox({
    value: '#FF0000'
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myColorBox").dxColorBox("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myColorBox").dxColorBox("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->