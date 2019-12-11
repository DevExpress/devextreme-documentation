//<!--@Knockout-->
var myViewModel = {
    directionValues: ['row', 'col'],
    directionValue: ko.observable('row')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.directionValues = ['row', 'col'];
    $scope.directionValue = 'row'
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myBox").dxBox({
    height: '70%',
    width: '90%'
});
$("#directionSelector").dxSelectBox({
    value: 'row',
    dataSource: ['row', 'col'],
    onValueChanged: function (e) {
        $("#myBox").dxBox("instance").option("direction", e.value);
    }
});
//<!--/@jQuery-->