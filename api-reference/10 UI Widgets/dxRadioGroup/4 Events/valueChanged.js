var flag = false;
//<!--@Knockout-->
var myViewModel = {
    colors: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ],
    currentColor: ko.observable("#FF0000"),
    radioGroupInstance: {},
    onInitialized: function (e) {
        myViewModel.radioGroupInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.radioGroupInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            myViewModel.radioGroupInstance.off("valueChanged");
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
    $scope.colors = [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ];
    $scope.currentColor = $scope.colors[0].value;
    $scope.radioGroupInstance = {};
    $scope.onInitialized = function (e) {
        $scope.radioGroupInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.radioGroupInstance.on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $scope.radioGroupInstance.off("valueChanged");
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
$("#myRadioGroup").dxRadioGroup({
    items: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ],
    value: '#FF0000',
    valueExpr: 'value'
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myRadioGroup").dxRadioGroup("instance").on(
                "valueChanged", function (e) {
                                    DevExpress.ui.dialog.alert('Previous value: <b>' + e.previousValue + '</b></br>' +
                                                                'New value: <b>' + e.value + '</b>', 'Info');
                                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myRadioGroup").dxRadioGroup("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
