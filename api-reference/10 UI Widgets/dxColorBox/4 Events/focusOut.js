var flag = false;
//<!--@Knockout-->
var myViewModel = {
    colorBoxInstance: {},
    onInitialized: function (e) {
        myViewModel.colorBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.colorBoxInstance
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
            myViewModel.colorBoxInstance
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
    $scope.colorBoxInstance = {};
    $scope.onInitialized = function (e) {
        $scope.colorBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.colorBoxInstance
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
            $scope.colorBoxInstance
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
$("#myColorBox").dxColorBox({
    value: '#FF0000'
});
$("#button").dxButton({
    text: 'Subscribe to FocusIn and FocusOut events',
    onClick: function (e) {
        if (flag === false) {
            $("#myColorBox").dxColorBox("instance")
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
            $("#myColorBox").dxColorBox("instance")
                                        .off("focusIn")
                                        .off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->