var flag = false;
//<!--@Knockout-->
var myViewModel = {
    checkBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.checkBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.checkBoxInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                               'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            myViewModel.checkBoxInstance.off("valueChanged");
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
    $scope.checkboxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.checkboxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.checkboxInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                               'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.checkboxInstance.off("valueChanged");
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
$("#myCheckBox").dxCheckBox({
    text: "Check me"
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myCheckBox").dxCheckBox("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('New value: <b>' + e.value + '</b></br>' +
                                                               'Previous value: <b>' + e.previousValue + '</b></br>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            $("#myCheckBox").dxCheckBox("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->