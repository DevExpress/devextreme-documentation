//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
        { dataField: 'CustomerID', allowFiltering: false },
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
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
        { dataField: 'CustomerID', allowFiltering: false },
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
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
        filterRow: { visible: true },
        searchPanel: { visible: true },
        columns: [
            { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
            { dataField: 'CustomerID', allowFiltering: false },
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        paging: { pageSize: 6 }
    });
});
//<!--/@jQuery-->