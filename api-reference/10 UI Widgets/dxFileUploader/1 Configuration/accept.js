//<!--@Knockout-->
var myViewModel = {
    acceptValue: ko.observable("image/gif,image/png")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.acceptValue = "image/gif,image/png";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myFileUploader").dxFileUploader({
    multiple: true,
    accept: "image/gif,image/png"
});
$("#acceptSelector").dxTextBox({
    value: "image/gif,image/png",
    onValueChanged: function (e) {
        $("#myFileUploader").dxFileUploader("instance").option("accept", e.value);
    }
});
//<!--/@jQuery-->