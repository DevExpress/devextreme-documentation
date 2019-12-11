//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    },
    processShowing: function () {
        DevExpress.ui.dialog.alert("The widget is being shown", "Action executed");
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
    $scope.processShowing = function () {
        DevExpress.ui.dialog.alert("The widget is being shown", "Action executed");
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    onShowing: function () {
        DevExpress.ui.dialog.alert("The widget is being shown", "Action executed");
    }
});
$("#showToastButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
//<!--/@jQuery-->
