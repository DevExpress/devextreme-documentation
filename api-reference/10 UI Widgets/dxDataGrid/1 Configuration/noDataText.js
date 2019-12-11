//<!--@Knockout-->
var myViewModel = {
    noDataText: ko.observable(undefined)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.noDataText = undefined;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: undefined
    });

    $("#noDataTextBox").dxTextBox({
        placeholder: 'Enter a text for the empty grid',
        height: 40,
        width: 300,
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                noDataText: info.value
            });
        }
    });
});
//<!--/@jQuery-->