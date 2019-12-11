//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    showToast: function () {
        this.toastVisible(true);
    },
    processHiding: function () {
        DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
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
    $scope.processHiding = function () {
        DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    onHidden: function () {
        DevExpress.ui.dialog.alert("The widget has been hidden", "Action executed");
    }
});
$("#showToastButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
//<!--/@jQuery-->
