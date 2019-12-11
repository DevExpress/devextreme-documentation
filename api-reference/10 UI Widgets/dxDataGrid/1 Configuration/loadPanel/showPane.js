//<!--@Knockout-->
var myViewModel = {
    columns: [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ],
    checkBoxState: ko.observable(true),
    dataGrid: null,
    getDataGrid: function (e) { dataGrid = e.component },
    refreshGrid: function () { dataGrid.refresh() }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.columns = [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ];
    $scope.checkBoxState = true;
    $scope.dataGrid = null;
    $scope.getDataGrid = function (e) { dataGrid = e.component };
    $scope.refreshGrid = function () { dataGrid.refresh() }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: {
            store: {
                type: 'odata',
                url: 'https://sampleservices.devexpress.com/Northwind.svc/Products'
            }
        },
        scrolling: { mode: 'virtual' },
        columns: [
            { dataField: 'ProductID', caption: 'ID' },
            { dataField: 'ProductName', caption: 'Name', width: 220 },
            { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
            { dataField: 'UnitPrice', caption: 'Price' },
            { dataField: 'UnitsInStock', caption: 'In Stock' }
        ],
        loadPanel: { showPane: true }
    });

    $("#checkboxContainer").dxCheckBox({
        value: true,
        text: 'Show the Pane of the Load Panel',
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                loadPanel: { showPane: info.value }
            });
        }
    });

    $("#refreshButton").dxButton({
        text: 'Refresh',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.refresh();
        }
    });
});
//<!--/@jQuery-->