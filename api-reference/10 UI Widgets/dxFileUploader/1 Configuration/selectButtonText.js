//<!--@Knockout-->
var myViewModel = {
    buttonTextValue: ko.observable("Select File")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.buttonTextValue = "Select File";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myFileUploader").dxFileUploader();
$("#buttonTextField").dxTextBox({
    value: "Select File",
    onValueChanged: function (e) {
        $("#myFileUploader").dxFileUploader("instance").option("selectButtonText", e.value);
    }
});
//<!--/@jQuery-->