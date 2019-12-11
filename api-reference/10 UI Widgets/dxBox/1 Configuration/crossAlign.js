//<!--@Knockout-->
var myViewModel = {
    crossAlignValues: ['start', 'end', 'center', 'stretch'],
    crossAlignValue: ko.observable('stretch')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.crossAlignValues = ['start', 'end', 'center', 'stretch'];
    $scope.crossAlignValue = 'stretch'
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myBox").dxBox({
    height: '40%',
    width: '90%'
});
$("#alignSelector").dxSelectBox({
    value: 'stretch',
    dataSource: ['start', 'end', 'center', 'stretch'],
    onValueChanged: function (e) {
        $("#myBox").dxBox("instance").option("crossAlign", e.value);
    }
});
//<!--/@jQuery-->