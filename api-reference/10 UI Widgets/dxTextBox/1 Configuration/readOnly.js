//<!--@Knockout-->
var myViewModel = {
    readOnlyValue: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.readOnlyValue = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox").dxTextBox({
    placeholder: 'Type your text here',
    value: 'Your text',
});
$("#readOnlySelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTextBox").dxTextBox("instance").option("readOnly", e.value);
    }
});
//<!--/@jQuery-->
