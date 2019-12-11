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
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            myViewModel.textBoxInstance.off("enterKey");
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
    $scope.textBoxInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.textBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.textBoxInstance.on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $scope.textBoxInstance.off("enterKey");
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
$("#myTextBox").dxTextBox({
    placeholder: 'Press Enter key within the widget'
});
$("#button").dxButton({
    text: 'Subscribe to EnterKey event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTextBox").dxTextBox("instance").on(
                "enterKey", function (e) {
                                DevExpress.ui.notify("The Enter key was pressed", "success", 1000);
                            }
            );
            e.component.option("text", "Unsubscribe from EnterKey event");
            flag = true;
        } else {
            $("#myTextBox").dxTextBox("instance").off("enterKey");
            e.component.option("text", "Subscribe to EnterKey event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->