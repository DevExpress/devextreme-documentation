//<!--@Knockout-->
var myViewModel = {
    toastVisible: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.toastVisible = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myToast").dxToast({
    message: 'Toast message',
    onHiding: function () {
        $("#visibleSelector").dxSwitch("instance").option("value", false);
    }
});
$("#visibleSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myToast").dxToast("instance").option("visible", e.value);
    }
});
//<!--/@jQuery-->
