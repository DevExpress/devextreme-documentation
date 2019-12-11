//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
        { dataField: 'CustomerID', selectedFilterOperation: 'startswith' },
        { dataField: 'OrderDate', dataType: 'date', selectedFilterOperation: '=' },
        { dataField: 'ShippedDate', dataType: 'date', selectedFilterOperation: '=' },
        { dataField: 'ShipName', selectedFilterOperation: 'contains' },
        { dataField: 'ShipCountry', caption: 'Ship To', selectedFilterOperation: 'startswith' }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.columns = [
        { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
        { dataField: 'CustomerID', selectedFilterOperation: 'startswith' },
        { dataField: 'OrderDate', dataType: 'date', selectedFilterOperation: '=' },
        { dataField: 'ShippedDate', dataType: 'date', selectedFilterOperation: '=' },
        { dataField: 'ShipName', selectedFilterOperation: 'contains' },
        { dataField: 'ShipCountry', caption: 'Ship To', selectedFilterOperation: 'startswith' }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
            { dataField: 'CustomerID', selectedFilterOperation: 'startswith' },
            { dataField: 'OrderDate', dataType: 'date', selectedFilterOperation: '=' },
            { dataField: 'ShippedDate', dataType: 'date', selectedFilterOperation: '=' },
            { dataField: 'ShipName', selectedFilterOperation: 'contains' },
            { dataField: 'ShipCountry', caption: 'Ship To', selectedFilterOperation: 'startswith' }
        ],
        pager: { visible: false },
        scrolling: { mode: 'infinite' },
        filterRow: {
            visible: true,
            resetOperationText: 'Restore default'
        }
    });
});
//<!--/@jQuery-->