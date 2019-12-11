//<!--@Knockout-->
var myViewModel = {
    clearButtonVisible: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.clearButtonVisible = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox").dxTextBox({
    placeholder: 'Type your text here',
    value: 'Your text',
    showClearButton: false
});
$("#showButtonSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTextBox").dxTextBox("instance").option("showClearButton", e.value);
    }
});
//<!--/@jQuery-->
