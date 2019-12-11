var flag = false;
//<!--@Knockout-->
var myViewModel = {
    numberBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.numberBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.numberBoxInstance.on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            myViewModel.numberBoxInstance.off("enterKey");
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
    $scope.numberBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.numberBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.numberBoxInstance.on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $scope.numberBoxInstance.off("enterKey");
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
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true,
    step: 5
});
$("#button").dxButton({
    text: 'Subscribe to EnterKey event',
    onClick: function (e) {
        if (flag === false) {
            $("#myNumberBox").dxNumberBox("instance").on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $("#myNumberBox").dxNumberBox("instance").off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
