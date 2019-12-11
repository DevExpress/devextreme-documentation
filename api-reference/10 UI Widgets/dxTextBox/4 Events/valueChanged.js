var flag = false;
//<!--@Knockout-->
var myViewModel = {
    textBoxInstance: {},
    initializedHandler: function (e) {
        myViewModel.textBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.textBoxInstance.on(
                "valueChanged", function (e) {
                    $("#newValue").text(e.value);
                    $("#oldValue").text(e.previousValue);
                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            myViewModel.textBoxInstance.off("valueChanged");
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
    $scope.textBoxInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.textBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.textBoxInstance.on(
                "valueChanged", function (e) {
                    $("#newValue").text(e.value);
                    $("#oldValue").text(e.previousValue);
                }
            );
            e.component.option("text", "Unsubscribe from valueChanged event");
            flag = true;
        } else {
            $scope.textBoxInstance.off("valueChanged");
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
$("#myTextBox").dxTextBox({
    placeholder: 'Type text here'
});
$("#button").dxButton({
    text: 'Subscribe to ValueChanged event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTextBox").dxTextBox("instance").on(
                "valueChanged", function (e) {
                    $("#newValue").text(e.value);
                    $("#oldValue").text(e.previousValue);
                }
            );
            e.component.option("text", "Unsubscribe from ValueChanged event");
            flag = true;
        } else {
            $("#myTextBox").dxTextBox("instance").off("valueChanged");
            e.component.option("text", "Subscribe to ValueChanged event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->