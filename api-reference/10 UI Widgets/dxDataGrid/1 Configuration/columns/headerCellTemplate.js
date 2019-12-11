var headerTemplate = function (header, info) {
    $('<div>').html(info.column.caption).css('font-size', '16px').appendTo(header);
};

//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        'OrderID', 'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
    ],
    customizeColumns: function (columns) {
        $.each(columns, function (_, element) {
            element.headerCellTemplate = headerTemplate;
        });
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.columns = [
        'OrderID', 'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
    ];
    $scope.customizeColumns = function (columns) {
        $.each(columns, function (_, element) {
            element.headerCellTemplate = headerTemplate;
        });
    };
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
            'OrderID', 'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        customizeColumns: function (columns) {
            $.each(columns, function (_, element) {
                element.headerCellTemplate = headerTemplate;
            });
        },
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->