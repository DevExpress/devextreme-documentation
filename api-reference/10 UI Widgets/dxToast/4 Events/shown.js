var flag = false;
//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    },
    toastInstance: {},
    initializedHandler: function (e) {
        myViewModel.toastInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.toastInstance
                .on("hidden", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been shown", "Action executed");
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            myViewModel.toastInstance
				.off("hidden")
				.off("shown");
            e.component.option("text", "Subscribe to hidden and shown events");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toastVisible = false;
    $scope.showToast = function () {
        $scope.toastVisible = true;
    };
    $scope.toastInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.toastInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.toastInstance
                .on("hidden", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been shown", "Action executed");
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $scope.toastInstance
                .off("hidden")
                .off("shown");
            e.component.option("text", "Subscribe to hidden and shown events");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message'
});
$("#showToastButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
$("#button").dxButton({
    text: 'Subscribe to hidden and shown event',
    onClick: function (e) {
        if (flag === false) {
            $("#myToast").dxToast("instance")
                .on("hidden", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
                }
                )
                .on("shown", function (e) {
                    DevExpress.ui.dialog.alert("The widget has been shown", "Action executed");
                }
                );
            e.component.option("text", "Unsubscribe from hidden and shown events");
            flag = true;
        } else {
            $("#myToast").dxToast("instance")
                .off("hidden")
                .off("shown")
            e.component.option("text", "Subscribe to hidden and shown events");
            flag = false;
        }
    }
});
//<!--/@jQuery-->