//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        'OrderID',
        { dataField: 'CustomerID', allowSorting: false },
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'ShipName', allowSorting: false },
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
        'OrderID',
        { dataField: 'CustomerID', allowSorting: false },
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'ShipName', allowSorting: false },
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
        columns: [
            'OrderID',
            { dataField: 'CustomerID', allowSorting: false },
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            { dataField: 'ShipName', allowSorting: false },
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->