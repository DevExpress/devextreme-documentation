//<!--@Knockout-->
var myViewModel = {
    clearButtonVisible: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.clearButtonVisible = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myNumberBox").dxNumberBox({
    placeholder: "Enter number",
    showClearButton: true
});
$("#showButtonSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myNumberBox").dxNumberBox("instance").option("showClearButton", e.value);
    }
});
//<!--/@jQuery-->
