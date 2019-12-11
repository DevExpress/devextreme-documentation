var flag = false;
//<!--@Knockout-->
var myViewModel = {
    dateBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.dateBoxInstance = e.component;
    },
    currentDate: new Date(),
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.dateBoxInstance.on("focusIn",
                function (e) {
                    DevExpress.ui.notify("The widget is in focus", "success", 1000);
                });
            myViewModel.dateBoxInstance.on("focusOut",
                function (e) {
                    DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                });
            e.component.option("text", "Unsubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            myViewModel.dateBoxInstance.off("focusIn")
            myViewModel.dateBoxInstance.off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.dateBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.dateBoxInstance = e.component;
    };
    $scope.currentDate = new Date();
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.dateBoxInstance.on("focusIn",
                function (e) {
                    DevExpress.ui.notify("The widget is in focus", "success", 1000);
                });
            $scope.dateBoxInstance.on("focusOut",
                function (e) {
                    DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                });
            e.component.option("text", "Unsubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            $scope.dateBoxInstance.off("focusIn");
            $scope.dateBoxInstance.off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myDateBox").dxDateBox({
    value: new Date()
});
$("#button").dxButton({
    text: 'Subscribe to FocusIn and FocusOut events',
    onClick: function (e) {
        var dateBoxInstance = $("#myDateBox").dxDateBox("instance");
        if (flag === false) {
            dateBoxInstance.on("focusIn",
                function (e) {
                    DevExpress.ui.notify("The widget is in focus", "success", 1000);
                });
            dateBoxInstance.on("focusOut",
                function (e) {
                    DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                });
            e.component.option("text", "Unubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            dateBoxInstance.off("focusIn");
            dateBoxInstance.off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->