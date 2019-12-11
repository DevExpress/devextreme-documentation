//<!--@Knockout-->
var myViewModel = {
    labelTextValue: ko.observable("or Drop file here")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.labelTextValue = "or Drop file here";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myFileUploader").dxFileUploader();
$("#buttonTextField").dxTextBox({
    value: "or Drop file here",
    onValueChanged: function (e) {
        $("#myFileUploader").dxFileUploader("instance").option("labelText", e.value);
    }
});
//<!--/@jQuery-->