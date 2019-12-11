//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false),
    showToast: function(){
        this.toastVisible(true);
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
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    type: 'success',
    displayTime: 2000
});
$("#showToastButton").dxButton({
    text: 'Show toast',
    onClick: function () {
        $("#myToast").dxToast("instance").show();
    }
});
//<!--/@jQuery-->
