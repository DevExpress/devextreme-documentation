//<!--@Knockout-->
var myViewModel = {
    length: 10,
    lengthDescription: "10 characters maximum",

    passMode: "password",
    secretDescription: "type a password",

    readonly: true,
    readonlyDescription: "read-only text box"
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.length = 10;
    $scope.lengthDescription = "10 characters maximum";

    $scope.passMode = "password";
    $scope.secretDescription = "type a password";

    $scope.readonly = true;
    $scope.readonlyDescription = "read-only text box";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox1").dxTextBox({
    maxLength: 10,
    placeholder: "10 characters maximum"
});
$("#myTextBox2").dxTextBox({
    mode: "password",
    placeholder: "type a password"
});
$("#myTextBox3").dxTextBox({
    readOnly:true,
    value: "read-only text box"
});
//<!--/@jQuery-->
