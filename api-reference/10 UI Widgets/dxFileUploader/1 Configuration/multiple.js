//<!--@Knockout-->
var myViewModel = {
    multipleValue: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.multipleValue = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myFileUploader").dxFileUploader({
    multiple: true
});
$("#multipleSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myFileUploader").dxFileUploader("instance").option("multiple", e.value);
    }
});
//<!--/@jQuery-->