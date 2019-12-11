//<!--@Knockout-->
var myViewModel = {
    textLength: ko.observable(10)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.textLength = 10;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox").dxTextBox({
    placeholder: 'Type your text here',
    maxLength: 10
});
$("#maxLengthSelector").dxNumberBox({
    min: 1,
    max: 50,
    value: 10,
    showSpinButtons: true,
    onValueChanged: function (e) {
        $("#myTextBox").dxTextBox("instance").option("maxLength", e.value);
    }
});
//<!--/@jQuery-->
