//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        { dataField: 'OrderID', allowGrouping: false },
        'CustomerID',
        { dataField: 'OrderDate', dataType: 'date', allowGrouping: false },
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
        { dataField: 'OrderID', allowGrouping: false },
        'CustomerID',
        { dataField: 'OrderDate', dataType: 'date', allowGrouping: false },
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
        groupPanel: {
            visible: true
        },
        columns: [
            { dataField: 'OrderID', allowGrouping: false },
            'CustomerID',
            { dataField: 'OrderDate', dataType: 'date', allowGrouping: false },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        paging: { pageSize: 7 }
    });
});
//<!--/@jQuery-->