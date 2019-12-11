//<!--@Knockout-->
var myViewModel = {
    alignValues: ['start', 'end', 'center', 'space-between', 'space-around'],
    alignValue: ko.observable('center')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.alignValues = ['start', 'end', 'center', 'space-between', 'space-around'];
    $scope.alignValue = 'center'
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
    value: 'center',
    dataSource: ['start', 'end', 'center', 'space-between', 'space-around'],
    onValueChanged: function (e) {
        $("#myBox").dxBox("instance").option("align", e.value);
    }
});
//<!--/@jQuery-->