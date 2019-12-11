var flag = false;
//<!--@Knockout-->
var myViewModel = {
    textBoxInstance: {},
    initializedHandler: function (e) {
        myViewModel.textBoxInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.textBoxInstance
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
            myViewModel.textBoxInstance
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
    $scope.textBoxInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.textBoxInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.textBoxInstance
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
            $scope.textBoxInstance
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
$("#myTextBox").dxTextBox({
    placeholder: 'Type text here'
});
$("#button").dxButton({
    text: 'Subscribe to FocusIn and FocusOut events',
    onClick: function (e) {
        if (flag === false) {
            $("#myTextBox").dxTextBox("instance")
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
            $("#myTextBox").dxTextBox("instance")
                    .off("focusIn")
                    .off("focusOut");
            e.component.option("text", "Subscribe to FocusIn and FocusOut events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->