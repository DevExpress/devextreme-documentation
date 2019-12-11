var flag = false;
//<!--@Knockout-->
var myViewModel = {
    numberBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.numberBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.numberBoxInstance
                        .on("focusIn",
                            function (e) {
                                DevExpress.ui.notify("The widget is in focus", "success", 1000);
                            })
                        .on("focusOut",
                            function (e) {
                                DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                            });
            e.component.option("text", "Unsubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            myViewModel.numberBoxInstance
                        .off("focusIn")
                        .off("focusOut");
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
    $scope.numberBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.numberBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.numberBoxInstance
                                .on("focusIn",
                                    function (e) {
                                        DevExpress.ui.notify("The widget is in focus", "success", 1000);
                                    })
                                .on("focusOut",
                                    function (e) {
                                        DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                                    });
            e.component.option("text", "Unsubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            $scope.numberBoxInstance
                                    .off("focusIn")
                                    .off("focusOut");
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
$("#myNumberBox").dxNumberBox({
    min: 0,
    max: 100,
    showSpinButtons: true,
    step: 5
});
$("#button").dxButton({
    text: 'Subscribe to FocusIn and FocusOut events',
    onClick: function (e) {
        if (flag === false) {
            $("#myNumberBox").dxNumberBox("instance")
                            .on("focusIn",
                                function (e) {
                                    DevExpress.ui.notify("The widget is in focus", "success", 1000);
                                })
                            .on("focusOut",
                                function (e) {
                                    DevExpress.ui.notify("The widget is out of focus", "error", 1000);
                                });
            e.component.option("text", "Unsubscribe from FocusIn and FocusOut events");
            flag = true;
        } else {
            $("#myNumberBox").dxNumberBox("instance")
                                                    .off("focusIn")
                                                    .off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
